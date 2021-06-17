import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './home-tutorial/login/login.component';
import { HomeTutorialComponent } from './home-tutorial/home-tutorial.component';
import { LoginCrudRoutingModule } from './login-crud-routing.module';


@NgModule({
  declarations: [
    HomeTutorialComponent,
    LoginComponent
  ],
  imports: [
    LoginCrudRoutingModule,
    SharedModule
  ]
})
export class LoginCrudModule { }
