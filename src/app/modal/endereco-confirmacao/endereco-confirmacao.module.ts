import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoConfirmacaoPageRoutingModule } from './endereco-confirmacao-routing.module';

import { EnderecoConfirmacaoPage } from './endereco-confirmacao.page';
import { UrlService } from 'src/app/shared/class/url-service';
import { EnderecoConfirmacaoService } from './endereco-confirmacao.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnderecoConfirmacaoPageRoutingModule
  ],
  declarations: [EnderecoConfirmacaoPage],
  providers: [
    EnderecoConfirmacaoService,
    UrlService
  ]
})
export class EnderecoConfirmacaoPageModule {}
