import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ClinicasService } from './clinicas.service';

@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.page.html',
  styleUrls: ['./clinicas.page.scss'],
})
export class ClinicasPage implements OnInit {

  listaClinicas: any;
  loading: boolean = false;
  mensagem: string;

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    private clinicasService: ClinicasService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url == "/page/clinicas") {
        this.loading = true;
         this.pageEnter();
      }
    });
  }

  async pageEnter(){
    let user = await this.storage.get("user");
    let token = await this.storage.get("token");
    await this.urlService.validateToken(token);

    this.listaClinicas = undefined;

    const coordinates = await Geolocation.getCurrentPosition();

    (await this.clinicasService.consultarListaClinica(coordinates.coords.latitude+","+coordinates.coords.longitude))
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
