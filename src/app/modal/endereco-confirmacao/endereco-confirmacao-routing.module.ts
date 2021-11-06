import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnderecoConfirmacaoPage } from './endereco-confirmacao.page';

const routes: Routes = [
  {
    path: '',
    component: EnderecoConfirmacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnderecoConfirmacaoPageRoutingModule {}
