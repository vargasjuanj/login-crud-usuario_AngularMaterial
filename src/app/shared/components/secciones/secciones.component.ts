import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogoSalirComponent } from '../dialogo-salir/dialogo-salir.component';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {

  @Input() cerrarSesion: any
  @Input() secciones: Array<string> = []
  @Input() iconos: Array<string> = []
  @Input() rutas: Array<string> = []

  seccionesEnBoolean = new Array<boolean>(this.secciones.length)

  @HostBinding('style.display') ocultarOMostrarSecciones = 'block'


  constructor(private router: Router, private dialog: MatDialog) { }

  mensajeHaciaElPadre = 'Mensaje desde el  hijo al Padre'

  ngOnInit(): void {
    this.seccionesEnBoolean[0] = true

  }



  irAlInicio() {
    this.router.navigate(['./'])
  }

  mostrarIndicador(seccion: string) {

    this.ocultarTodosLosIndicadores()


    //Esto es para que por ejemplo principal no valla a invitado/invitado ya que no esta definida esa ruta porque '' redirecciona a principal
    if (seccion === this.secciones[0]) {
      this.seccionesEnBoolean[0] = true
      this.router.navigate([this.rutas[0]])
    }

    let cantidadDeSecciones = this.secciones.length

    for (let indice = 0; indice < cantidadDeSecciones; indice++) {

      if (seccion === this.secciones[indice]) {
        this.seccionesEnBoolean[indice] = true

      }

    }
  }

  ocultarTodosLosIndicadores() {

    let cantidadDeSecciones = this.seccionesEnBoolean.length

    for (let indice = 0; indice < cantidadDeSecciones; indice++) {

      this.seccionesEnBoolean[indice] = false
    }
  }

  abrirDialogo() {
    const dialog = this.dialog.open(DialogoSalirComponent, {
      width: "250px",
       disableClose: true 
    })

    this.ocultarOMostrarSecciones = 'none'
    //cuando se cierra
    dialog.afterClosed().subscribe(
      result => {
        if (result) {
          this.irAlInicio()
        }else{
          this.ocultarOMostrarSecciones = 'block'

        }
      }
    )

    }
  }
