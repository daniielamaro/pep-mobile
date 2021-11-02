import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarMedicamentoPage } from './criar-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: CriarMedicamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarMedicamentoPageRoutingModule {}
