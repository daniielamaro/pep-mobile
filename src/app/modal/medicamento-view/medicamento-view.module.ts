import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentoViewPageRoutingModule } from './medicamento-view-routing.module';

import { MedicamentoViewPage } from './medicamento-view.page';
import { UrlService } from 'src/app/shared/class/url-service';
import { MedicamentoViewService } from './medicamento-view.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentoViewPageRoutingModule
  ],
  declarations: [MedicamentoViewPage],
  providers: [
    MedicamentoViewService,
    UrlService
  ]
})
export class MedicamentoViewPageModule {}
