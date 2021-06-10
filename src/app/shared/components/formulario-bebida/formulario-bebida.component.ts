import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articulo } from '@shared/model/stock/articulo.model';
import { ArticuloCategoria } from '@shared/model/stock/articuloCategoria.model';
import { DatosService } from '@shared/services/datos.service';

@Component({
  selector: 'app-formulario-bebida',
  templateUrl: './formulario-bebida.component.html',
  styleUrls: ['./formulario-bebida.component.css']
})
export class FormularioBebidaComponent implements OnInit {
  

  @Input()nombreDeCategoria: any
  @Input() categoria : ArticuloCategoria | any
  @Input() articulo: Articulo | any



  @Input() marcaAuxiliar : string | any
  @Input() archivoAuxiliar: File | any




  @Input() tipoDeBebida = '';
  @Input() tipoDeAlcoholica = '';
  @Input() marcaONombreAuxiliar = '';
  


  @Output() desaparecerFormularioDelPadre = new EventEmitter<any>()
  @Output() enviarArticuloAlPadre = new EventEmitter<Articulo>()


  constructor(public servicioDeDatos: DatosService) { }



  ngOnInit(): void {
  
  }



  bloquearBoton() {
    //si retorna falso es porque no se bloquea el boton y por ende los campos están completados
    if ( this.hayCantidadYMedida() &&  this.hayMarca()&& this.tipoDeBebida ) {
      return false;
    }
    return true;
  }

  hayCantidadYMedida(){
    return this.articulo.cantidad && this.articulo.medida
  }
  hayMarca(){
    return (this.articulo.marca && this.articulo.marca !== 'Otra') || this.marcaONombreAuxiliar
  }

  hayFoto(){
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

vaciarMarcaNombreYMarcaAuxiliar() {
  this.articulo.nombre = ''
  this.articulo.marca = ''
  this.marcaONombreAuxiliar = ''
}

// vaciarAuxiliares() {
//   this.tipoDeBebida = '';
//   this.tipoDeAlcoholica = '';
//   this.marcaONombreAuxiliar = '';
//   this.vaciarFoto()

// }

// vaciarFoto(){
//   this.articulo.foto.archivo= undefined
// }




// vaciarCantidadYMedida() {
//   this.articulo.cantidad = undefined
//   this.articulo.cantidad = undefined
// }
desaparecerFormulario() {
 // this.vaciarVariables()
  this.desaparecerFormularioDelPadre.emit()
}


  enviarArticulo() {
this.guardarCategoria()
this.articulo.foto.archivo = this.archivoAuxiliar
    if (this.marcaONombreAuxiliar) {
      this.articulo.marca = this.marcaONombreAuxiliar
    }
    this.enviarArticuloAlPadre.emit(this.articulo)
    this.desaparecerFormulario()
  }

  guardarCategoria(){

    // Tienen id manual, el problema es que yo queria que fuera composición que al eliminar una se eliminaran las otras, pero me gustaria que las categorias tengan sus id por separada para setearle a cada articulo, asi que hay que crear los ids manualmente por ahora
//El id de la subcategoria va a ser igual al nombre de esa subcategoria
// Esa es la diferencia que hay con sql, con sql directamente seteaba al crear una categoria y sus subcategorias, estas subcategorias se crean con id, pero al eliminar la categoria padre, se eliminan las hijas en cascada   
let indexDeTipoDeBebida = this.servicioDeDatos.tiposDeBebidas.indexOf(this.tipoDeBebida)

    if(this.tipoDeBebida === 'Alcohol'){
  let indexDeTipoDeAlcohol = this.servicioDeDatos.tiposDeAlcoholicas.indexOf(this.tipoDeAlcoholica)
 this.articulo.categoria = this.categoria.categoriashijas[0].categoriashijas[indexDeTipoDeAlcohol] 
 }else{

      this.articulo.categoria = this.categoria.categoriashijas[indexDeTipoDeBebida]

    }


  }



  seleccionarFoto(event: any){
    this.archivoAuxiliar = event.target.files[0] //cuando hay varias foto se seleccionan las otras posiciones del array
   // console.info('foto',this.archivoAuxiliar)
  }

}


