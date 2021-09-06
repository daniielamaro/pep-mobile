import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { ModalController } from '@ionic/angular';
import { FotoperfilPage } from 'src/app/modal/fotoperfil/fotoperfil.page';
declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  photo: any;
  user: any;

  constructor(
    private storage: StorageService,
    public modalController: ModalController) {}

  async ngOnInit(){
    this.user = await this.storage.get("user");
  }

  async openPhoto() {
    const loadingScreen = await this.modalController.create({
      component: FotoperfilPage
    });

    loadingScreen.onDidDismiss()
      .then(async (data) => {
        const userReturn = data['data'];
        this.user = userReturn;
        await this.storage.set("user", this.user);
      });

    return await loadingScreen.present();
  }

}
