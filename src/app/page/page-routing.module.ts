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
