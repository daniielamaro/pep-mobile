import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamePageRoutingModule } from './exame-routing.module';

import { ExamePage } from './exame.page';
import { UrlService } from 'src/app/shared/class/url-service';
import { ExameService } from './exame.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamePageRoutingModule
  ],
  declarations: [ExamePage],
  providers: [
    ExameService,
    UrlService
  ]
})
export class ExamePageModule {}
