import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { MedicamentoService } from '../medicamento.service';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { UrlService } from 'src/app/shared/class/url-service';

@Component({
  selector: 'app-criar-medicamento',
  templateUrl: './criar-medicamento.page.html',
  styleUrls: ['./criar-medicamento.page.scss'],
})
export class CriarMedicamentoPage implements OnInit {

  user: any;

  nome: any;
  numQuantidade: any;
  tipoQuantidade: any;
  outraQuantidade: any;
  numIntervalo: any;
  tipoIntervalo: any;
  outroIntervalo: any;
  usoContinuo: any;
  dataInicio: any;
  dataTermino: any;
  publico: any;

  constructor(
    private medicamentoService: MedicamentoService,
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private router: Router,
    private storage: StorageService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url == "/page/criar-medicamento") {
         this.pageEnter();
      }
    });
  }

  async ngOnInit() {}

  async pageEnter(){
    this.user = await this.storage.get("user");
    let token = await this.storage.get("token");
    await this.urlService.validateToken(token);
  }

  async salvarMedicamento(){
    this.showLoadingScreen()
      .then(async () => {

        let request = {
          idPaciente: this.user.id,
          nome: this.nome,
          numQuantidade: this.numQuantidade ? Number(this.numQuantidade) : 0,
          tipoQuantidade: this.tipoQuantidade,
          outraQuantidade: this.outraQuantidade,
          numIntervalo: this.numIntervalo ? Number(this.numIntervalo) : 0,
          tipoIntervalo: this.tipoIntervalo,
          outroIntervalo: this.outroIntervalo,
          publico: this.publico,
          dataInicio: this.dataInicio,
          dataTermino: this.dataTermino,
          usoContinuo: this.usoContinuo
        };

        this.nome = undefined;
        this.numQuantidade = undefined;
        this.tipoQuantidade = undefined;
        this.outraQuantidade = undefined;
        this.numIntervalo = undefined;
        this.tipoIntervalo = undefined;
        this.outroIntervalo = undefined;
        this.usoContinuo = undefined;
        this.dataInicio = undefined;
        this.dataTermino = undefined;
        this.publico = undefined;

        (await this.medicamentoService.salvarMedicamento(request))
          .subscribe(() => {
            this.router.navigateByUrl("/page/medicamentos");
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
