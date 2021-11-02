import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarConsultaPageRoutingModule } from './criar-consulta-routing.module';

import { CriarConsultaPage } from './criar-consulta.page';
import { ConsultaService } from '../consulta.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarConsultaPageRoutingModule
  ],
  declarations: [CriarConsultaPage],
  providers: [
    ConsultaService
  ]
})
export class CriarConsultaPageModule {}
