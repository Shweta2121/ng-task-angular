import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: 'customer',
    canActivate: [AuthGuard],
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
