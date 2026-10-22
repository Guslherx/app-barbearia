import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { GerenciarHorariosPageRoutingModule } from './gerenciar-horarios-routing.module';

import { GerenciarHorariosPage } from './gerenciar-horarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciarHorariosPageRoutingModule
  ],
  declarations: [GerenciarHorariosPage]
})
export class GerenciarHorariosPageModule {}
