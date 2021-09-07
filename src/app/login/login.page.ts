import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../shared/class/storage.service';

import { ModalController } from '@ionic/angular';
import { LoadingPage } from '../loading/loading.page';
import { UrlService } from '../shared/class/url-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    private storage: StorageService,
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router) {
      this.loginForm = this.fb.group({
        login: this.fb.control('', [Validators.required]),
        senha: this.fb.control('', [Validators.required])
      });
  }

  async ngOnInit() {
    this.showLoadingScreen()
      .then(() => {
        this.storage.existKey("user")
          .then(ok =>{
            if(ok)this.router.navigateByUrl("page");
            this.closeLoadingScreen();
          });
      });
  }

  async entrar(){
    this.showLoadingScreen()
      .then(async () => {

        (await this.loginService.entrar(this.loginForm.get("login").value, this.loginForm.get("senha").value))
          .subscribe(async (resp: any) => {
            this.closeLoadingScreen();
            await this.storage.set("token", resp.token);
            await this.storage.set("user", resp.paciente);
            this.loginForm.get("login").setValue("");
            this.loginForm.get("senha").setValue("");
            this.router.navigateByUrl('page');
          },error => {
            this.closeLoadingScreen();
            this.toastController.create({
              message: error.error,
              duration: 3000
            }).then(toast => {
              toast.present();
            });
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
