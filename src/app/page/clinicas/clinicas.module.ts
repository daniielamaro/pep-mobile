import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicasPageRoutingModule } from './clinicas-routing.module';

import { ClinicasPage } from './clinicas.page';
import { ClinicasService } from './clinicas.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { EnderecoAtualService } from 'src/app/modal/endereco-atual/endereco-atual.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicasPageRoutingModule
  ],
  declarations: [ClinicasPage],
  providers: [ClinicasService, UrlService, EnderecoAtualService]
})
export class ClinicasPageModule {}
