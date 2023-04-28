import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListingPageComponent } from './components/customer-listing-page/customer-listing-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CoreModule } from '../core/core.module';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';



@NgModule({
  declarations: [
    CustomerListingPageComponent,
    LayoutComponent,
    DashboardComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CoreModule
  ]
})
export class CustomerModule { }
