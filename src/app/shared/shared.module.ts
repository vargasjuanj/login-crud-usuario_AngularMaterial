import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { FooterComponent } from "@shared/components/footer/footer.component";
import { SearchComponent } from "@shared/components/search/search.component";
import { CrudComponent } from "@shared/components/crud/crud.component";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DialogoEliminarComponent } from './components/dialogo-eliminar/dialogo-eliminar.component';
import { UppercaseWords } from './pipes/UppercaseWordsPipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CrudComponent,
    ErrorPageComponent,
    DialogoEliminarComponent,
    FooterComponent,

    SearchComponent,

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
    DialogoEliminarComponent,
    ErrorPageComponent,
    FlexLayoutModule,
    FormsModule,
    FooterComponent,
  
    MaterialModule,

    ReactiveFormsModule,
    RouterModule,
    SearchComponent,
    UppercaseWords
  ]
})
export class SharedModule { }
