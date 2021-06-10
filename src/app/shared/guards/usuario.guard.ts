import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { InvitadoService } from '@shared/services/invitado.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements  CanActivateChild {
 

  constructor( private servicioDeInvitado: InvitadoService, private router: Router) { }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.servicioDeInvitado.recuperarSesionDelLocalStorage('invitado')) {
      alert('Inicia Sesión o registrate')
      console.log('No estás logueado');
      this.router.navigate(['/']);
      return false;
  }
//alert('2')
  return true;
  }

  
}
