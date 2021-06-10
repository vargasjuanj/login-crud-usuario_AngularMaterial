import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvitadoService } from '@shared/services/invitado.service';


@Component({
  selector: 'app-dialogo-salir',
  templateUrl: './dialogo-salir.component.html',
  styleUrls: ['./dialogo-salir.component.css']
})
export class DialogoSalirComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogoSalirComponent>, private servicioInvitado: InvitadoService,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }
    


  ngOnInit(): void {
  }

  
salir(){
  this.servicioInvitado.eliminarSesionOCondicionDeNuevoDelLocalStorage('invitado')
  this.servicioInvitado.eliminarSesionOCondicionDeNuevoDelLocalStorage('nuevo')
  this.servicioInvitado.eliminarId()
  this.servicioInvitado.eliminarSesionDeAnfitrion()
  this.dialogRef.close(true)

}

cancelar(){
this.dialogRef.close()
}

}
