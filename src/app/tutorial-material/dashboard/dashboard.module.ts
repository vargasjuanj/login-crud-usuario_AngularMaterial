import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './dashboard/inicio/inicio.component';
import { UsuariosComponent } from './dashboard/usuarios/usuarios.component';
import { ReportesComponent } from './dashboard/reportes/reportes.component';
import { SharedModule } from '@shared/shared.module';
import { NavegacionComponent } from './dashboard/navegacion/navegacion.component';
import { TablaComponent } from './dashboard/usuarios/tabla/tabla.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavegacionComponent,
    UsuariosComponent,
    ReportesComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
