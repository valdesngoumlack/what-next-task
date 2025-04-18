import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboadPageRoutingModule } from './dashboad-routing.module';

import { DashboadPage } from './dashboad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DashboadPageRoutingModule
  ],
  declarations: [DashboadPage]
})
export class DashboadPageModule {}
