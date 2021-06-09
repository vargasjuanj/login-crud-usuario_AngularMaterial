import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTutorialComponent } from './home-tutorial/home-tutorial.component';
import { LoginComponent } from './home-tutorial/login/login.component';

const routes: Routes = [
  {path: '', component: HomeTutorialComponent,
  children: [

  ]  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialMaterialRoutingModule { }
