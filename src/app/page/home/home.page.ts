import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { ModalController } from '@ionic/angular';
import { FotoperfilPage } from 'src/app/modal/fotoperfil/fotoperfil.page';
import { UrlService } from 'src/app/shared/class/url-service';
declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  photo: any;
  user: any;

  constructor(private router: Router, private storage: StorageService, private urlService: UrlService, public modalController: ModalController) {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url == "/page/home") {
        this.pageEnter();
      }
    });
  }

  async ngOnInit(){ }

  async pageEnter(){
    this.user = await this.storage.get("user");
    let token = await this.storage.get("token");
    await this.urlService.validateToken(token);
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
