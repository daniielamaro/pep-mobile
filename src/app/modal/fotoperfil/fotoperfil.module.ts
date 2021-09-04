import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotoperfilPageRoutingModule } from './fotoperfil-routing.module';

import { FotoperfilPage } from './fotoperfil.page';
import { UrlService } from 'src/app/shared/class/url-service';
import { FotoperfilService } from './fotoperfil.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    IonicModule,
    FotoperfilPageRoutingModule
  ],
  declarations: [FotoperfilPage],
  providers: [
    FotoperfilService,
    UrlService
  ]
})
export class FotoperfilPageModule {}
