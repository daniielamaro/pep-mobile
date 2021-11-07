import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { MedicamentoService } from '../medicamento.service';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { UrlService } from 'src/app/shared/class/url-service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-criar-medicamento',
  templateUrl: './criar-medicamento.page.html',
  styleUrls: ['./criar-medicamento.page.scss'],
})
export class CriarMedicamentoPage implements OnInit {

  user: any;

  nome: string;
  numQuantidade: number;
  tipoQuantidade: string;
  outraQuantidade: string;
  numIntervalo: number;
  tipoIntervalo: string;
  outroIntervalo: string;
  temReceita: boolean = false;
  usoContinuo: boolean;
  dataInicio: string;
  dataTermino: string;
  publico: boolean;
  receita: any = null;

  constructor(
    private medicamentoService: MedicamentoService,
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private dom: DomSanitizer,
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

    this.nome = undefined;
    this.numQuantidade = undefined;
    this.tipoQuantidade = undefined;
    this.outraQuantidade = undefined;
    this.numIntervalo = undefined;
    this.tipoIntervalo = undefined;
    this.outroIntervalo = undefined;
    this.temReceita = undefined;
    this.usoContinuo = undefined;
    this.dataInicio = undefined;
    this.dataTermino = undefined;
    this.publico = undefined;
    this.receita = undefined;
  }

  fileChange(e){
    let arquivoPre = e.target.files[0];
    if(arquivoPre){
      let reader = new FileReader();
      reader.readAsDataURL(arquivoPre);
      reader.onload = () => {
        this.receita = {
          nome: arquivoPre.name,
          tipo: arquivoPre.type,
          binario: reader.result.toString().split(';')[1].split(',')[1]
        };
      };
    }else{
      this.receita = undefined;
    }
  }

  formularioValido(){
    if(!this.nome || !this.nome.trim()) return false;
    else if(!this.numQuantidade && this.tipoQuantidade != 'Outro') return false;
    else if(!this.tipoQuantidade || !this.tipoQuantidade.trim()) return false;
    else if(!this.outraQuantidade && this.tipoQuantidade == 'Outro') return false;
    else if(!this.numIntervalo && this.tipoIntervalo != 'Outro') return false;
    else if(!this.tipoIntervalo || !this.tipoIntervalo.trim()) return false;
    else if(!this.outroIntervalo && this.tipoIntervalo == 'Outro') return false;
    else if(this.temReceita && !this.receita) return false;
    else if(!this.dataInicio || !this.dataInicio.trim()) return false;
    else if((!this.dataTermino || !this.dataTermino.trim()) && !this.usoContinuo) return false;

    return true;
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
          tipoCadastro: this.temReceita ? 2 : 0,
          receita: this.receita,
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
