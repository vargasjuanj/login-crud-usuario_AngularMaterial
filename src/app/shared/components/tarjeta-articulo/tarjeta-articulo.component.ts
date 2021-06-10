import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Articulo } from '@shared/model/stock/articulo.model';
import { DatosService } from '@shared/services/datos.service';
import { InvitadoService } from '@shared/services/invitado.service';
import { DialogoEliminarComponent } from '../dialogo-eliminar/dialogo-eliminar.component';

@Component({
  selector: 'app-tarjeta-articulo',
  templateUrl: './tarjeta-articulo.component.html',
  styleUrls: ['./tarjeta-articulo.component.css']
})
export class TarjetaArticuloComponent implements OnInit {

  @Input() esInvitado = false
  //Diferentes formas de colocar la propieda

  //en esta forma se tuvieron que inicializar las porpiedades obligatorias
  // @Input () heroe: Heroe = {
  //     superhero: '',
  //     publisher: Publisher.DCComics,
  //     alter_ego: '',
  //     first_appearance: '',
  //     characters: '' 
  // }

  //En esta forma puedo recibir un héroe o un undefined
  // @Input () heroe: Heroe | undefined 

  //Y en esta forma con el signo "!"  le digo a typescript que confie en mi, que siempre va a tener un heroe o valor

  @Input() articulo!: Articulo
  @Input() index: number | any
  @Output() emitirIndex = new EventEmitter<number>()
  constructor(private router: Router, private servicioDeDatos: DatosService, private servicioDeInvitado: InvitadoService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }



  //con el router link no funcaba para buscar
  eliminar(indexArticulo: number) {

this.abrirDialogo(indexArticulo);

  }
  emitirIndexAlPadre(indexArticulo: number) {
this.emitirIndex.emit()
  }

  noEsNingunTipoDeBebida() {
    if (!this.articulo.categoria) {
      return false
    }
    return !this.servicioDeDatos.tiposDeBebidas.includes(this.articulo.categoria.nombre!)
      && !this.servicioDeDatos.tiposDeAlcoholicas.includes(this.articulo.categoria.nombre!)
  }

  esAlgunTipoDeBebida() {
    if (!this.articulo.categoria) {
      return true
    }
    return this.servicioDeDatos.tiposDeBebidas.includes(this.articulo.categoria.nombre!)
      || this.servicioDeDatos.tiposDeAlcoholicas.includes(this.articulo.categoria.nombre!)
  }

  
  abrirDialogo(indexArticulo: number) {
    const dialog = this.dialog.open(DialogoEliminarComponent, {
      width: "300px",
       disableClose: true 
    })

    //cuando se cierra
    dialog.afterClosed().subscribe(
      result => {
        if (result) {
          this.eliminarArticulo(indexArticulo)
        }else{
console.log('no se eliminara')

        }
      }
    )

    }

    eliminarArticulo(indexArticulo : number){
      let id = this.servicioDeInvitado.recuperarIdDelLocalStorage()

      this.servicioDeInvitado.getOne(id!).subscribe(invitado => {
        invitado.articulos.splice(indexArticulo, 1)
        this.servicioDeInvitado.put(id!, invitado).subscribe(invitado => {
  
          this.emitirIndexAlPadre(indexArticulo)
          console.log('articulo eliminado del invitado', invitado)
        })
      })
    }



}
