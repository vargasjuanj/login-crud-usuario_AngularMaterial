import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '@shared/model/stock/articulo.model';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent implements OnInit {

  @Input() esInvitado: any
 @Input() articulos: any
 @Input() nombreYApellido:  any
  constructor( ) { }

  ngOnInit() {

  }
  eliminarArticuloConIndex(indexDeArticulo: number){
   this.articulos.splice(indexDeArticulo,1)
  }

}
