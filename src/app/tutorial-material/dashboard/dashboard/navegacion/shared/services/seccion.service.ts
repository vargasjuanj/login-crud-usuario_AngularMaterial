import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seccion } from '../../navegacion.component';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  constructor(private httpService: HttpClient) { }

  cargarSecciones(){
  return  this.httpService.get<Seccion[]>('./assets/data/secciones.json')
  }
}
