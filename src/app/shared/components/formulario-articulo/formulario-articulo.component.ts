import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articulo } from '@shared/model/stock/articulo.model';
import { ArticuloCategoria } from '@shared/model/stock/articuloCategoria.model';
import { DatosService } from '@shared/services/datos.service';

@Component({
  selector: 'app-formulario-articulo',
  templateUrl: './formulario-articulo.component.html',
  styleUrls: ['./formulario-articulo.component.css']
})
export class FormularioArticuloComponent implements OnInit {

  @Input()nombreDeCategoria: any
  @Input() categoria : ArticuloCategoria | any
  @Input() articulo: Articulo | any



  @Input() marcaAuxiliar : string | any
  @Input() nombreAuxiliar : string | any
  @Input() archivoAuxiliar: File | any



  @Output() desaparecerFormularioDelPadre = new EventEmitter<any>()
  @Output() enviarArticuloAlPadre = new EventEmitter<Articulo>()


  constructor(public servicioDeDatos: DatosService) { }



  ngOnInit(): void {

  }




  bloquearBoton() {
    //si retorna falso es porque no se bloquea el boton y por ende los campos están completados
    if (this.hayCantidadYMedida() && this.hayNombreYMarca()) {
      return false
    }
    return true
  }

  nombreYMarcaSonOtra() {
    return this.articulo.nombre === 'Otra' && this.articulo.marca === 'Otra'
  }

  auxiliaresConValores() {
    return this.marcaAuxiliar && this.nombreAuxiliar
  }

  hayCantidadYMedida() {

    return this.articulo.cantidad && this.articulo.medida
  }
  hayNombre() {
    return (this.articulo.nombre && this.articulo.nombre !== 'Otra') || this.nombreAuxiliar

  }
  hayMarca() {
    return (this.articulo.marca && this.articulo.marca !== 'Otra') || this.marcaAuxiliar
  }


  hayFoto() {
    return this.articulo.foto.archivo
  }





  // vaciarVariables() {
  //   this.articulo.nombre = ''
  //   this.articulo.marca = ''
  //   this.articulo.cantidad = undefined
  //   this.articulo.cantidad = undefined
  //   this.vaciarFoto()
  //   this.vaciarAuxiliares()


  // }

  // vaciarMarcaNombreYMarcaAuxiliar() {
  //   this.articulo.nombre = ''
  //   this.articulo.marca = ''
  //   this.nombreAuxiliar = ''
  //   this.marcaAuxiliar = ''
  // }

  // vaciarAuxiliares() {
  //   this.marcaAuxiliar = '';
  //   this.nombreAuxiliar = ''
  //   this.vaciarFoto()

  // }

  // vaciarFoto() {
  //   this.articulo.foto.archivo = undefined
  // }




  // vaciarCantidadYMedida() {
  //   this.articulo.cantidad = undefined
  //   this.articulo.cantidad = undefined
  // }

  mostrarDescripcionOInputFile() {
    this.articulo.foto.archivo = undefined
    return this.hayNombreYMarca()
  }

  hayNombreYMarca() {

    if (this.hayMarca() && this.hayNombre()) {
      return true
    } else if (this.nombreYMarcaSonOtra() && this.auxiliaresConValores()) {
      return true
    } else {
      return false
    }
  }


  desaparecerFormulario() {
    //this.vaciarAuxiliares()
    this.desaparecerFormularioDelPadre.emit()
  }

 

  seleccionarFoto(event: any) {
    this.archivoAuxiliar = event.target.files[0] //cuando hay varias foto se seleccionan las otras posiciones del array

  }


  enviarArticulo() {
    this.articulo.categoria = this.categoria
    this.articulo.foto.archivo = this.archivoAuxiliar
    if (this.marcaAuxiliar) {
      this.articulo.marca = this.marcaAuxiliar
    }
    
    if (this.nombreAuxiliar) {
      this.articulo.nombre = this.nombreAuxiliar
    }
    this.enviarArticuloAlPadre.emit(this.articulo)
    this.desaparecerFormulario()
  }


}



