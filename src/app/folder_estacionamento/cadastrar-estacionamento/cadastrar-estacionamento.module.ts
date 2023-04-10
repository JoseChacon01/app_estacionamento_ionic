import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarEstacionamentoPageRoutingModule } from './cadastrar-estacionamento-routing.module';

import { CadastrarEstacionamentoPage } from './cadastrar-estacionamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarEstacionamentoPageRoutingModule
  ],
  declarations: [CadastrarEstacionamentoPage]
})
export class CadastrarEstacionamentoPageModule {}
