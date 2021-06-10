import { Component, Input, OnInit } from '@angular/core';
import { Invitado } from '@shared/model/persona/usuario/invitado/invitado.model';
import { InvitadoService } from '@shared/services/invitado.service';

@Component({
  selector: 'app-listado-invitados',
  templateUrl: './listado-invitados.component.html',
  styleUrls: ['./listado-invitados.component.css']
})
export class ListadoInvitadosComponent implements OnInit {

@Input() invitados! : Invitado[] 

  constructor(private servicioDeInvitado: InvitadoService) { }

  ngOnInit(): void {
  }
// El index se usa para vaciar la vista, aunque ya se haya eliminado en la bd, la vista hay q actualizarla borran do del array con el index el invitado
// Es una buena opción para no andar recargando la pagina
eliminarInvitadoDeLaVista(indexDeInvitado: number){
  this.invitados.splice(indexDeInvitado,1)
 }

}
