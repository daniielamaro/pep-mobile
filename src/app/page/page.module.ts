import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePageRoutingModule } from './page-routing.module';

import { PagePage } from './page.page';
import { UrlService } from '../shared/class/url-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePageRoutingModule
  ],
  declarations: [PagePage],
  providers: [
    UrlService
  ],
})
export class PagePageModule {}
