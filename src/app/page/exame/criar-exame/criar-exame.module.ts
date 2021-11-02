import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarExamePageRoutingModule } from './criar-exame-routing.module';

import { CriarExamePage } from './criar-exame.page';
import { ExameService } from '../exame.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarExamePageRoutingModule
  ],
  declarations: [CriarExamePage],
  providers: [
    ExameService
  ]
})
export class CriarExamePageModule {}
