import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstacionamentoPage } from './estacionamento.page';

const routes: Routes = [
  {
    path: '',
    component: EstacionamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstacionamentoPageRoutingModule {}
