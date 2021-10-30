import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentoPageRoutingModule } from './medicamento-routing.module';

import { MedicamentoPage } from './medicamento.page';
import { UrlService } from 'src/app/shared/class/url-service';
import { MedicamentoService } from './medicamento.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentoPageRoutingModule
  ],
  declarations: [MedicamentoPage],
  providers: [
    MedicamentoService,
    UrlService
  ]
})
export class MedicamentoPageModule {}
