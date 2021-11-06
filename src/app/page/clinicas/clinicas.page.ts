import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ClinicasService } from './clinicas.service';

import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { EnderecoAtualPage } from 'src/app/modal/endereco-atual/endereco-atual.page';
import { EnderecoConfirmacaoPage } from 'src/app/modal/endereco-confirmacao/endereco-confirmacao.page';

@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.page.html',
  styleUrls: ['./clinicas.page.scss'],
})
export class ClinicasPage implements OnInit {

  listaClinicas: any;
  loading: boolean = false;
  mensagem: string;

  locationCordinates: any;
  coords: string;

  plataformas: any;

  constructor(
    private router: Router,
    private storage: StorageService,
    private locationAccuracy: LocationAccuracy,
    public modalController: ModalController,
    private geolocation: Geolocation,
    public plt: Platform,
    private androidPermissions: AndroidPermissions,
    private urlService: UrlService,
    private clinicasService: ClinicasService)
  {
    this.locationCordinates = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url == "/page/clinicas") {
        this.plataformas = this.plt.platforms();
        this.pageEnter();
      }
    });
  }

  checkPermission() {
    if(this.plataformas.includes("cordova")){
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
        result => {
          if (result.hasPermission) {
            this.enableGPS();
          } else {
            this.locationAccPermission();
          }
        },
        error => {
          alert(error);
        }
      );
    }else{
      this.currentLocPosition();
    }
  }

  locationAccPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        this.enableGPS();
      } else {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              this.enableGPS();
            },
            error => {
              alert(error)
            }
          );
      }
    });
  }

  enableGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        this.currentLocPosition()
      },
      error => this.router.navigateByUrl("/page/home")
    );
  }

  currentLocPosition() {
    this.geolocation.getCurrentPosition().then(async (response) => {
      this.locationCordinates.latitude = response.coords.latitude;
      this.locationCordinates.longitude = response.coords.longitude;
      this.locationCordinates.accuracy = response.coords.accuracy;
      this.locationCordinates.timestamp = response.timestamp;

      this.coords = this.locationCordinates.latitude+","+this.locationCordinates.longitude;

      this.exibirModal(this.coords);
    }).catch((error) => {
      alert('Error: ' + error);
    });
  }

  async exibirModal(coords: string){
    const loadingScreen = await this.modalController.create({
      component: EnderecoAtualPage,
      componentProps: {
        coords: coords
      }
    });

    loadingScreen.onDidDismiss()
      .then(async (data) => {
        const coords = data['data'];
        this.coords = coords;
        if(this.coords == null)
          this.router.navigateByUrl("/page/home");
        else{
          this.getListaClinicas(this.coords);
        }
      });

    return await loadingScreen.present();
  }

  async exibirModalEnderecoConf(item: any){
    const loadingScreen = await this.modalController.create({
      component: EnderecoConfirmacaoPage,
      componentProps: {
        item: item
      }
    });

    loadingScreen.onDidDismiss()
      .then(async () => {
      });

    return await loadingScreen.present();
  }

  async pageEnter(){
    let token = await this.storage.get("token");
    await this.urlService.validateToken(token);
    this.listaClinicas = undefined;
    this.loading = true;
    this.checkPermission();
  }

  editarEndereco(){
    this.exibirModal(this.coords);
  }

  async getListaClinicas(coords: string){
    (await this.clinicasService.consultarListaClinica(coords))
      .subscribe((resp: any) => {
        this.listaClinicas = resp;

        if(this.listaClinicas.length == 0)
          this.mensagem = "Nenhuma clinica cadastrada!";

        this.loading = false;
      },
      error => {
        if(error.status == 401 || error.status == 403){
          this.storage.remove("user");
          this.router.navigateByUrl("");
        }
        this.mensagem = error.error;
        this.loading = false;
      });
  }

  ngOnInit() {}

  formatarDistancia(distancia: number){
    if(distancia < 1000) return distancia + (distancia > 1 ? " metros" : " metro");
    else return (distancia/1000).toFixed(1) + " Km";
  }
}
