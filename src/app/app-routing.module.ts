import { ErrorPageComponent } from '@shared/components/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./login-crud/login-crud.module').then(m => m.LoginCrudModule)
  },
 
  {
     path: '**', // cualquier otra pagina, o sino usar el redirecTo al componente de error
     component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
