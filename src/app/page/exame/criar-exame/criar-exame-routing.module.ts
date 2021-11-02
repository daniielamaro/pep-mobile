import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarExamePage } from './criar-exame.page';

const routes: Routes = [
  {
    path: '',
    component: CriarExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarExamePageRoutingModule {}
