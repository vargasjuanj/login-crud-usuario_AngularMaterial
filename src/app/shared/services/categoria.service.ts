import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceService } from '@core/base.service';
import { EndPoints } from '@shared/end-points';
import { ArticuloCategoria } from '@shared/model/stock/articuloCategoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService  extends BaseServiceService<ArticuloCategoria>{

  constructor(private httpService: HttpClient) {
    super(httpService)
    this.baseUrl = EndPoints.CATEGORIAS
   }
}
