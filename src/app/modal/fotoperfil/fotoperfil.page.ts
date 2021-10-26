import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/shared/class/storage.service';
import { FotoperfilService } from './fotoperfil.service';
import { Camera, CameraDirection, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotoperfil',
  templateUrl: './fotoperfil.page.html',
  styleUrls: ['./fotoperfil.page.scss'],
})
export class FotoperfilPage implements OnInit {

  user: any;
  loadingPhoto: boolean = false;

  constructor(private router: Router, private storage: StorageService, private fotoperfilService: FotoperfilService, private modalController: ModalController) { }

  async ngOnInit(){
    this.user = await this.storage.get("user");
  }

  async mudarFoto(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      direction: CameraDirection.Front,
      source: CameraSource.Camera,
      resultType: CameraResultType.DataUrl
    });

    const photoObj = image.dataUrl;

    this.loadingPhoto = true;

    (await this.fotoperfilService.mudarFoto(this.getBinaryPhoto(photoObj), this.getTypePhoto(photoObj), this.user.id))
      .subscribe(async (resp: any) => {
        this.user = resp;
        this.loadingPhoto = false;
        this.closeFoto();
      },
      error => {
        if(error.status == 401 || error.status == 403){
          this.storage.remove("user");
          this.router.navigateByUrl("");
        }
      });
  }

  async removerFoto(){
    this.loadingPhoto = true;
    (await this.fotoperfilService.removerFoto(this.user.id))
      .subscribe(async () => {
        this.user.fotoPerfil = null;
        this.loadingPhoto = false;
        this.closeFoto();
      },
      error => {
        if(error.status == 401 || error.status == 403){
          this.storage.remove("user");
          this.router.navigateByUrl("");
        }
      });
  }

  getTypePhoto(photo: any): string{
    return photo.split(';')[0].split(':')[1];
  }

  getBinaryPhoto(photo: any): any{
    return photo.split(';')[1].split(',')[1];
  }

  closeFoto(){
    this.modalController.dismiss(this.user);
  }

}
