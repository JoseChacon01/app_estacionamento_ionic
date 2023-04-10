import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEstacionamentosPageRoutingModule } from './listar-estacionamentos-routing.module';

import { ListarEstacionamentosPage } from './listar-estacionamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEstacionamentosPageRoutingModule
  ],
  declarations: [ListarEstacionamentosPage]
})
export class ListarEstacionamentosPageModule {}
