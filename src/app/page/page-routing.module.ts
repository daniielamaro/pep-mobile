import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePage } from './page.page';

const routes: Routes = [
  {
    path: '',
    component: PagePage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'exame',
        loadChildren: () => import('./exame/exame.module').then( m => m.ExamePageModule)
      },
      {
        path: 'criar-exame',
        loadChildren: () => import('./criar-exame/criar-exame.module').then( m => m.CriarExamePageModule)
      },
      {
        path: 'consulta',
        loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
      },
      {
        path: 'criar-consulta',
        loadChildren: () => import('./criar-consulta/criar-consulta.module').then( m => m.CriarConsultaPageModule)
      },
      {
        path: 'medicamento',
        loadChildren: () => import('./medicamento/medicamento.module').then( m => m.MedicamentoPageModule)
      },
      {
        path: 'criar-medicamento',
        loadChildren: () => import('./criar-medicamento/criar-medicamento.module').then( m => m.CriarMedicamentoPageModule)
      },
      {
        path: '',
        redirectTo: '/page/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePageRoutingModule {}
