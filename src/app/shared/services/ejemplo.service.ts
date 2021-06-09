import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceService } from '@core/base.service';
import { EndPoints } from '@shared/end-points';
import { Ejemplo } from '../model/ejemplo.model';

@Injectable({
  providedIn: 'root'
})
export class EjemploService extends BaseServiceService<Ejemplo>{



  constructor( private httpService: HttpClient,) {
    super(httpService);
    this.baseUrl = EndPoints.ARTICULOS
  }

}
