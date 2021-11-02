import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ExameService } from '../exame.service';

@Component({
  selector: 'app-criar-exame',
  templateUrl: './criar-exame.page.html',
  styleUrls: ['./criar-exame.page.scss'],
})
export class CriarExamePage implements OnInit {

  tiposExames: any;
  user: any;

  dataExame: any;
  tipoExame: any;
  publico: any;
  arquivo: any;
  observacoes: any;

  constructor(
    private exameService: ExameService,
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private router: Router,
    private storage: StorageService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url == "/page/criar-exame") {
         this.pageEnter();
      }
    });
  }

  async ngOnInit() { }

  async pageEnter(){
    this.getTiposExames();
    this.user = await this.storage.get("user");
    let token = await this.storage.get("token");
    await this.urlService.validateToken(token);
  }

  async getTiposExames(){
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.consultarListaTiposExames())
          .subscribe((resp: any) => {
            this.tiposExames = resp;
          },
          error => {
            if(error.status == 401 || error.status == 403){
              this.storage.remove("user");
              this.router.navigateByUrl("");
            }
            else{
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

  fileChange(e){
    let arquivoPre = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(arquivoPre);
    reader.onload = () => {
      this.arquivo = {
        name: arquivoPre.name,
        type: arquivoPre.type,
        binary: reader.result.toString().split(';')[1].split(',')[1]
      };
    };
  }

  async salvarExame(){
    this.showLoadingScreen()
      .then(async () => {
        let request = {
          arquivo: this.arquivo == undefined ? null : {
            nome: this.arquivo.name,
            tipo: this.arquivo.type,
            binario: this.arquivo.binary
          },
          dataRealizacao: this.dataExame.split("T")[0],
          idPaciente: this.user.id,
          idTipoExame: this.tipoExame,
          publico: this.publico,
          observacoes: this.observacoes
        };

        this.arquivo = undefined;
        this.dataExame = undefined;
        this.tipoExame = undefined;
        this.publico = false;
        this.observacoes = undefined;

        (await this.exameService.salvarExame(request))
          .subscribe(() => {
            this.router.navigateByUrl("/page/exames");
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
