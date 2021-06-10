import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './dashboard/inicio/inicio.component';
import { ReportesComponent } from './dashboard/reportes/reportes.component';
import { FormComponent } from './dashboard/usuarios/form/form.component';
import { UsuariosComponent } from './dashboard/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'usuarios/form', component: FormComponent },
      { path: 'usuarios/form/:index', component: FormComponent }
    ]
  },
  { path: 'dashboard', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
