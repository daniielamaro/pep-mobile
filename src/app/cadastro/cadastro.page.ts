import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from '../loading/loading.page';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastroForm: FormGroup;

  constructor(
    public toastController: ToastController,
    public modalController: ModalController,
    private cadastroService: CadastroService,
    private fb: FormBuilder,
    private router: Router) {

    this.cadastroForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      rg: this.fb.control('', [Validators.required]),
      cpf: this.fb.control('', [Validators.required]),
      dataNasc: this.fb.control('', [Validators.required]),
      email: this.fb.control(''),
      endereco: this.fb.control(''),
      senha: this.fb.control('', [Validators.required]),
      confSenha: this.fb.control('', [Validators.required])
    });

  }

  ngOnInit() {
  }

  cadastrar(){
    if(this.cadastroForm.get("senha").value != this.cadastroForm.get("confSenha").value){
      this.toastController.create({
        message: "As senhas não coincidem",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
      return;
    }

    let request = {
      nome: this.cadastroForm.get("nome").value,
      rg: this.cadastroForm.get("rg").value,
      cpf: this.cadastroForm.get("cpf").value,
      email: this.cadastroForm.get("email").value,
      dataNasc: this.cadastroForm.get("dataNasc").value,
      endereco: this.cadastroForm.get("endereco").value,
      senha: this.cadastroForm.get("senha").value,
    };

    this.cadastroService.cadastrar(request)
      .subscribe(() => {
        this.toastController.create({
          message: "Cadastrado!",
          duration: 2000
        }).then(toast => {
          toast.present();
          this.router.navigateByUrl("/login");
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
