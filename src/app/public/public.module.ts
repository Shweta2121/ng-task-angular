import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [LoginComponent, LayoutComponent],
  imports: [
    CommonModule,
    CoreModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
