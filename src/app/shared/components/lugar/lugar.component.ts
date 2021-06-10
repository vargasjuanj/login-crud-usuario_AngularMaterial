import { Component, OnInit } from '@angular/core';
import { Invitado } from '@shared/model/persona/usuario/invitado/invitado.model';
import { InvitadoService } from '@shared/services/invitado.service';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {
  bloquearBotonDeMensaje = false

  invitado: Invitado = { articulos: [], nombre: '', apellido: '' }

  textoBotonMensaje = ''

  copiaDelMensaje = ''
  constructor( private servicioDeInvitado: InvitadoService) { }

  ngOnInit(): void {
    this.scrollearAlInicio()
  }
  scrollearAlInicio() {
    window.scroll(0, 0)
  }

  cambiarEstadoDelBotonDeMensaje() {
    this.bloquearBotonDeMensaje = this.bloquearBotonDeMensaje ? false : true
  }

  guardarMensaje() {

    this.servicioDeInvitado.put(this.invitado.id!, this.invitado).subscribe((invitadoBD) => {
      this.bloquearBotonDeMensaje = false
      if(!invitadoBD.mensaje){
        this.textoBotonMensaje = 'Dejar Mensajito'
      }
    }, err => console.error('Error al actualizar invitado -Principal-', err))

  }

  obtenerInvitado() {
    let id = this.servicioDeInvitado.recuperarIdDelLocalStorage()
    this.servicioDeInvitado.getOne(id!).subscribe(invitado => {
      this.invitado = invitado
      if(!invitado.mensaje  || invitado.mensaje === ''){
        this.textoBotonMensaje = 'Dejar Mensajito'
      }else{
        this.textoBotonMensaje = 'Actualizar Mensaje'
      }
    })

  }

  mostrarContenidoDelMensaje(){
    if(!this.bloquearBotonDeMensaje && this.invitado.mensaje){
      return true
    }
    return false
    
  }
cancelarGuardar(){
  this.cambiarEstadoDelBotonDeMensaje()
  this.invitado.mensaje = this.copiaDelMensaje
}

abrirCajaDeMensaje(){
  this.cambiarEstadoDelBotonDeMensaje()
  this.copiaDelMensaje = this.invitado.mensaje!
}
}
