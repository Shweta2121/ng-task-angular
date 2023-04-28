import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerListingPageComponent } from './components/customer-listing-page/customer-listing-page.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'all-customer',
        component: CustomerListingPageComponent
      },
      {
        path: 'add',
        component: CustomerFormComponent
      },
      {
        path: ':id',
        component: CustomerFormComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
