import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCarrosPageRoutingModule } from './add-carros-routing.module';

import { AddCarrosPage } from './add-carros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCarrosPageRoutingModule
  ],
  declarations: [AddCarrosPage]
})
export class AddCarrosPageModule {}
