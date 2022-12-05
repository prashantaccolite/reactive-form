import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ROUTING } from '../../shared/constants/routing.constant';
import { ActiveVendorComponent } from './active-vendor/active-vendor.component';

const routes: Routes = [
  { path: "", redirectTo: ROUTING.ACTIVE, pathMatch: "full" },
  { path: ROUTING.ACTIVE, component: ActiveVendorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
