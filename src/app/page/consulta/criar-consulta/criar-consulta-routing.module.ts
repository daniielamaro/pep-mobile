import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarConsultaPage } from './criar-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: CriarConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarConsultaPageRoutingModule {}
