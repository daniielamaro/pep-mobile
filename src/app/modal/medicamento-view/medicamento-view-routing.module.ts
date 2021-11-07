import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentoViewPage } from './medicamento-view.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentoViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentoViewPageRoutingModule {}
