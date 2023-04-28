import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ButtonRendererComponent } from './components/button-renderer/button-renderer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown/';

@NgModule({
  declarations: [
    ButtonRendererComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    BsDropdownModule.forRoot()
    ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    BsDropdownModule
  ]
})
export class CoreModule { }
