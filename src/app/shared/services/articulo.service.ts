import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceService } from '@core/base.service';
import { EndPoints } from '@shared/end-points';
import { Articulo } from '@shared/model/stock/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService extends BaseServiceService<Articulo>{



  constructor( private httpService: HttpClient,) {
    super(httpService);
    this.baseUrl = EndPoints.ARTICULOS
  }

crearArticuloConFoto( articulo: Articulo){
  const formData = new FormData()
  formData.append('nombre',articulo.nombre!)
  formData.append('marca',articulo.marca!)
 formData.append('cantidad',articulo.cantidad?.toString()!) // lo guarda como entero, pero solo puede enviar blob o string
  formData.append('medida',articulo.medida!)
  formData.append('descripcion',articulo.descripcion!)
 // formData.append('categoria',articulo.categoria.toString()!) noo funca
  formData.append('archivo',articulo.foto.archivo!)
 return  this.httpService.post<Articulo>(EndPoints.ARTICULOS_CON_FOTO,formData)
}


}
