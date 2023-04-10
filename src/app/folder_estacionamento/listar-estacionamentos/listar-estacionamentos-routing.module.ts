import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEstacionamentosPage } from './listar-estacionamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEstacionamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEstacionamentosPageRoutingModule {}
