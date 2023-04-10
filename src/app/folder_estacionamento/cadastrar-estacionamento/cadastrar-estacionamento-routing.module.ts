import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarEstacionamentoPage } from './cadastrar-estacionamento.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarEstacionamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarEstacionamentoPageRoutingModule {}
