import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { FooterComponent } from "@shared/components/footer/footer.component";
import { SearchComponent } from "@shared/components/search/search.component";
import { CrudComponent } from "@shared/components/crud/crud.component";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LugarComponent } from './components/lugar/lugar.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { FormularioBebidaComponent } from './components/formulario-bebida/formulario-bebida.component';
import { FormularioComidaComponent } from './components/formulario-comida/formulario-comida.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { DialogoSalirComponent } from './components/dialogo-salir/dialogo-salir.component';
import { FormularioArticuloComponent } from './components/formulario-articulo/formulario-articulo.component';
import { ListadoArticulosComponent } from './components/listado-articulos/listado-articulos.component';
import { TarjetaArticuloComponent } from './components/tarjeta-articulo/tarjeta-articulo.component';
import { DialogoEliminarComponent } from './components/dialogo-eliminar/dialogo-eliminar.component';
import { TarjetaInvitadoComponent } from './components/tarjeta-invitado/tarjeta-invitado.component';
import { ListadoInvitadosComponent } from './components/listado-invitados/listado-invitados.component';
import { SliderComponent } from './components/slider/slider.component';
import { UppercaseWords } from './pipes/UppercaseWordsPipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CrudComponent,
    ErrorPageComponent,
    DialogoSalirComponent,
    DialogoEliminarComponent,
    FooterComponent,
    FormularioArticuloComponent,
    FormularioBebidaComponent,
    FormularioComidaComponent,
    ListadoArticulosComponent,
    ListadoInvitadosComponent,
    LugarComponent,
    MiPerfilComponent,
    SearchComponent,
    SeccionesComponent,
    SliderComponent,
    TarjetaArticuloComponent,
    TarjetaInvitadoComponent,
    ToolbarComponent,
    TarjetaInvitadoComponent,
    UppercaseWords
    
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule, 
    MaterialModule,
    RouterModule  //Para el [routerLink] dinamico
  ],
  exports: [
    CommonModule,
    CrudComponent,
    DialogoSalirComponent,
    DialogoEliminarComponent,
    ErrorPageComponent,
    FlexLayoutModule,
    FormsModule,
    FooterComponent,
    FormularioArticuloComponent,
    FormularioBebidaComponent,
    FormularioComidaComponent,
    LugarComponent,
    ListadoArticulosComponent,
    ListadoInvitadosComponent,
    MaterialModule,
    MiPerfilComponent,
    ReactiveFormsModule,
    RouterModule,
    SearchComponent,
    SeccionesComponent,
    SliderComponent,
    TarjetaArticuloComponent,
    TarjetaInvitadoComponent,
    ToolbarComponent,
    UppercaseWords
  ]
})
export class SharedModule { }
