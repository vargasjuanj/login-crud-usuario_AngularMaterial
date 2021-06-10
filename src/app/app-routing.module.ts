import { ErrorPageComponent } from '@shared/components/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// En las rutas si ordenar los importas, en los modulos es mejor ordenar lo que esta dentro de corchetes para ahorrar tiempo

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tutorial-material/tutorial-material.module').then(m => m.TutorialMaterialModule)
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
