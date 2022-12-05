import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { ActiveVendorComponent } from './active-vendor/active-vendor.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ActiveVendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class VendorModule { }
