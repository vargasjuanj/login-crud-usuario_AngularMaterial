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
import { ConfirmComponent } from './dashboard/usuarios/confirm/confirm.component';
import { FormComponent } from './dashboard/usuarios/form/form.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavegacionComponent,
    UsuariosComponent,
    ReportesComponent,
    TablaComponent,
    ConfirmComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
