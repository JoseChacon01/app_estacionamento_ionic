import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCarrosPage } from './add-carros.page';

const routes: Routes = [
  {
    path: '',
    component: AddCarrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCarrosPageRoutingModule {}
