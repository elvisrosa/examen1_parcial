import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioPageModule } from './pages/inic/inicio.module';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inic/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'input-form',
    loadChildren: () => import('./pages/form/input-form.module').then( m => m.InputFormPageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./pages/aler/alertas.module').then( m => m.AlertasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
