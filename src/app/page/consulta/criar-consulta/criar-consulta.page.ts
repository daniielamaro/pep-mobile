import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-criar-consulta',
  templateUrl: './criar-consulta.page.html',
  styleUrls: ['./criar-consulta.page.scss'],
})
export class CriarConsultaPage implements OnInit {

  tiposConsultas: any;
  user: any;

  dataConsulta: any;
  tipoConsulta: any;
  publico: any;
  resumo: any;
  observacoes: any;

  constructor(
    private consultaService: ConsultaService,
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private router: Router,
    private storage: StorageService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url == "/page/criar-consulta") {
         this.pageEnter();
      }
    });
  }

  async ngOnInit() {}

  async pageEnter(){
    this.getTiposExames();
    this.user = await this.storage.get("user");
    let token = await this.storage.get("token");
    await this.urlService.validateToken(token);
  }

  async getTiposExames(){
    this.showLoadingScreen()
      .then(async () => {
        (await this.consultaService.consultarListaTiposConsultas())
          .subscribe((resp: any) => {
            this.tiposConsultas = resp;
          },
          error => {
            if(error.status == 401 || error.status == 403){
              this.storage.remove("user");
              this.router.navigateByUrl("");
            }else{
              this.toastController.create({
                message: error.error,
                duration: 5000
              }).then(toast => {
                toast.present();
              });
            }
          },
          () => {
            this.closeLoadingScreen();
          });
    });
  }

  async salvarConsulta(){
    this.showLoadingScreen()
      .then(async () => {
        let request = {
          idPaciente: this.user.id,
          idTipoConsulta: this.tipoConsulta,
          diaRealizacao: this.dataConsulta.split("T")[0],
          publico: this.publico,
          resumo: this.resumo,
          observacoes: this.observacoes
        };

        this.dataConsulta = undefined;
        this.tipoConsulta = undefined;
        this.publico = false;
        this.resumo = undefined;
        this.observacoes = undefined;

        (await this.consultaService.salvarConsulta(request))
          .subscribe(() => {
            this.router.navigateByUrl("/page/consultas");
          },
          error => {
            if(error.status == 401 || error.status == 403){
              this.storage.remove("user");
              this.router.navigateByUrl("");
            }else{
              this.toastController.create({
                message: error.error,
                duration: 5000
              }).then(toast => {
                toast.present();
              });
            }
          },
          () => {
            this.closeLoadingScreen();
          });

      });
  }

  async showLoadingScreen() {
    const loadingScreen = await this.modalController.create({
      component: LoadingPage
    });
    return await loadingScreen.present();
  }

  async closeLoadingScreen() {
    this.modalController.getTop().then(loader => {
      if (loader) {
        loader.dismiss();
      }
    });
  }

}
