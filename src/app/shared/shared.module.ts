import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule, 
    MaterialModule
    // RouterModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
