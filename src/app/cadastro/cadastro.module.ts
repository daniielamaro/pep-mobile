import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from '../shared/class/url-service';
import { CadastroService } from './cadastro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroPage],
  providers: [
    UrlService,
    CadastroService
  ],
})
export class CadastroPageModule {}
