import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    path: '',
  },
  {
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    path: 'dashboard',
  },
  {
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    path: 'registration',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
