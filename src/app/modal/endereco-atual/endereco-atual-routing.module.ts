import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnderecoAtualPage } from './endereco-atual.page';

const routes: Routes = [
  {
    path: '',
    component: EnderecoAtualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnderecoAtualPageRoutingModule {}
