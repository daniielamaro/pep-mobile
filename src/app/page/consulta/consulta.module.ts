import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaPageRoutingModule } from './consulta-routing.module';

import { ConsultaPage } from './consulta.page';
import { UrlService } from 'src/app/shared/class/url-service';
import { ConsultaService } from './consulta.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaPageRoutingModule
  ],
  declarations: [ConsultaPage],
  providers: [
    ConsultaService,
    UrlService
  ]
})
export class ConsultaPageModule {}
