import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciarHorariosPage } from './gerenciar-horarios.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciarHorariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciarHorariosPageRoutingModule {}
