import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoAtualPageRoutingModule } from './endereco-atual-routing.module';

import { EnderecoAtualPage } from './endereco-atual.page';
import { UrlService } from 'src/app/shared/class/url-service';
import { EnderecoAtualService } from './endereco-atual.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnderecoAtualPageRoutingModule
  ],
  declarations: [EnderecoAtualPage],
  providers: [
    EnderecoAtualService,
    UrlService
  ]
})
export class EnderecoAtualPageModule {}
