import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamePage } from './exame.page';

const routes: Routes = [
  {
    path: '',
    component: ExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamePageRoutingModule {}
