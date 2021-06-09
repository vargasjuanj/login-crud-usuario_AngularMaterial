import { NgModule } from '@angular/core';

import { TutorialMaterialRoutingModule } from './tutorial-material-routing.module';
import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './home-tutorial/login/login.component';
import { HomeTutorialComponent } from './home-tutorial/home-tutorial.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeTutorialComponent,
    LoginComponent
  ],
  imports: [
    TutorialMaterialRoutingModule,
    SharedModule
  ]
})
export class TutorialMaterialModule { }
