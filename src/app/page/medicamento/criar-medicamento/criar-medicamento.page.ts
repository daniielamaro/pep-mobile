import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { MedicamentoService } from '../medicamento.service';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { UrlService } from 'src/app/shared/class/url-service';
import {File} from "@ionic-native/file";
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-criar-medicamento',
  templateUrl: './criar-medicamento.page.html',
  styleUrls: ['./criar-medicamento.page.scss'],
})
export class CriarMedicamentoPage implements OnInit {

  user: any;
  idMedicamento: string;

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

  editando: boolean = false;

  constructor(
    private medicamentoService: MedicamentoService,
    public modalController: ModalController,
    public toastController: ToastController,
    private document: DocumentViewer,
    private urlService: UrlService,
    private router: Router,
    private actvRouter: ActivatedRoute,
    private storage: StorageService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url == "/page/criar-medicamento") {
         this.pageEnter();
      }
    });
  }

  async ngOnInit() {
    this.actvRouter.params.subscribe(async params => {
      this.idMedicamento = params['id'];

      if(this.idMedicamento != "0"){
        this.editando = true;
        (await this.medicamentoService.getMedicamentoById(this.idMedicamento))
          .subscribe(
            (resp: any) => {
              this.nome = resp.nome;
              this.numQuantidade = resp.numQuantidade;
              this.tipoQuantidade = resp.tipoQuantidade;
              this.outraQuantidade = resp.outraQuantidade;
              this.numIntervalo = resp.numIntervalo;
              this.tipoIntervalo = resp.tipoIntervalo;
              this.outroIntervalo = resp.outroIntervalo;
              this.temReceita = resp.tipoCadastro == 2 ? true : false;
              this.usoContinuo = resp.usoContinuo;
              this.dataInicio = resp.dataInicio;
              this.dataTermino = resp.dataTermino;
              this.publico = resp.publico;
              this.receita = resp.receita;
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
            }
          );
      }else {
        this.editando = false;
      }
    });
  }

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

  async abrirReceita(receita: any){

    let blob = this.b64toBlob(receita.binario, receita.tipo);

    File.checkDir(File.externalApplicationStorageDirectory, 'Receitas')
        .then(_ => {
          File.writeFile(File.externalApplicationStorageDirectory + 'Receitas/', receita.nome, blob, {replace: true}).then(response => {
            const options: DocumentViewerOptions = {
              title: 'Receita'
            }

            this.document.viewDocument(File.externalApplicationStorageDirectory + 'Receitas/'+receita.nome, receita.tipo, options);
          }).catch(err => {

          })
        })
        .catch(err => {
          File.createDir(File.externalApplicationStorageDirectory, 'Receitas', false).then(result => {
            File.writeFile(File.externalApplicationStorageDirectory + 'Receitas/', receita.nome, blob, {replace: true}).then(response => {
              const options: DocumentViewerOptions = {
                title: 'Receita'
              }

              this.document.viewDocument(File.externalApplicationStorageDirectory + 'Receitas/'+receita.nome, receita.tipo, options);
            }).catch(err => {

            })
          })
        });
  }

   //convert base64 to blob
 b64toBlob(b64Data, contentType) {
  contentType = contentType || '';
  var sliceSize = 512;
  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
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

  async editarMedicamento(){
    this.showLoadingScreen()
      .then(async () => {

        let request = {
          idMedicamento: this.idMedicamento,
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

        (await this.medicamentoService.editarMedicamento(request))
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

  selecionarArquivo(){
    document.getElementById('selecao-arquivo').click();
  }

  removerArquivo(){
    this.receita = null;
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
