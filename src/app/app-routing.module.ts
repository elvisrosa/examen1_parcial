import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioPageModule } from './paginas/inicio/inicio.module';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'input-form',
    loadChildren: () => import('./paginas/input-form/input-form.module').then( m => m.InputFormPageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./paginas/alertas/alertas.module').then( m => m.AlertasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
