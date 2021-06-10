import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceService } from '@core/base.service';
import { EndPoints } from '@shared/end-points';
import { Invitado } from '@shared/model/persona/usuario/invitado/invitado.model';

@Injectable({
  providedIn: 'root'
})
export class InvitadoService extends BaseServiceService<Invitado>{




  constructor(protected httpService: HttpClient,) {
    super(httpService);
    this.baseUrl = EndPoints.INVITADOS
  }

  // crearArticuloConFoto( articulo: Articulo){
  //   const formData = new FormData()
  //   formData.append('nombre',articulo.nombre!)
  //   formData.append('marca',articulo.marca!)
  //  formData.append('cantidad',articulo.cantidad?.toString()!) // lo guarda como entero, pero solo puede enviar blob o string
  //   formData.append('medida',articulo.medida!)
  //   formData.append('descripcion',articulo.descripcion!)
  //  // formData.append('categoria',articulo.categoria.toString()!) noo funca
  //   formData.append('archivo',articulo.foto.archivo!)
  //  return  this.httpService.post<Articulo>(EndPoints.ARTICULOS_CON_FOTO,formData)
  // }

  buscarPorNombreYSegundoNombre(nombre: string, segundoNombre: string) {
    return this.httpService.get<Invitado>(EndPoints.INVITADOS_POR_NOMBRE_Y_SEGUNDO_NOMBRE + `?nombre=${nombre}&segundoNombre=${segundoNombre}`);
  }


  buscarPorNombreYApellido(nombre: string, apellido: string) {
    return this.httpService.get<Invitado>(EndPoints.INVITADOS_POR_NOMBRE_Y_APELLIDO + `?nombre=${nombre}&apellido=${apellido}`);
  }

  guardarSesionEnElLocalStorage(invitado: Invitado) {
    try {
      localStorage.setItem('invitado', JSON.stringify(invitado))
      console.log('invitado guardado en el localstorage', invitado)
    } catch (e) {
      console.error('Error agregando invitado al localStorage', e);
    }


  }

  crearSesionDeAnfitrion(){
    try {
      localStorage.setItem('anfitrion','anfitrion')

    } catch (e) {

    }
  }

 esSesionDeAnfitrion(){
  if(localStorage.getItem('anfitrion')){
    return true
  }
  return false
 }

 eliminarSesionDeAnfitrion() {
 localStorage.removeItem('anfitrion')
}


  guardarIdEnElLocalStorage(id: string){
    try {
      localStorage.setItem('id', id)
      console.log('Id de invitado',id)
    } catch (e) {
      console.error('Error guardando id de  invitado en el localStorage', e);
    }
  }
  recuperarIdDelLocalStorage(){


      return localStorage.getItem('id')


  }
  eliminarId(){
    try {

    localStorage.removeItem('id')
    } catch (e) {
      return
      console.error('Error obtener el id de  invitado en el localStorage', e);
    }
  }
  recuperarSesionDelLocalStorage(key: string) {

    try {
      let invitado = JSON.parse(JSON.stringify(localStorage.getItem(key)))
      console.log('invitado recuperado del localstorage',invitado)
      return invitado
    } catch (e) {
      console.error('Error recuperando invitado del localStorage', e);
      return 
    }
 

  }

  eliminarSesionOCondicionDeNuevoDelLocalStorage(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error eliminando sesión o condicion de "nuevo" del localStorage', e);
    }
  }

  vaciarLocalStorage(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error vaciando el  localStorage', e);
    }
  }


  
  nuevoUsuario() {
    try {
      localStorage.setItem('nuevo',('nuevo'))

    } catch (e) {
      console.error('Error en guardar la condicion de nuevo en el localStorage', e);
    }
  }
      
    esNuevoUsuario( ) {

      try {
        let esNuevo = localStorage.getItem('nuevo')
        
        if(esNuevo){
          return true
        }
      }catch (e) {
        console.error('Error en validar si es usuario nuevo localStorage', e);
      }
      return false
  
    }

 

}
