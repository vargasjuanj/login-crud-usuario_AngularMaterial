import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SeccionService } from './shared/services/seccion.service';

export interface Seccion{
  nombre: string
  link: string
}

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
secciones: Seccion[] = []

  constructor(private breakpointObserver: BreakpointObserver, private seccionService: SeccionService) {}


  ngOnInit(): void {
  this.cargarSecciones()
  }

  cargarSecciones(){
    this.seccionService.cargarSecciones().subscribe(secciones =>{
      this.secciones = secciones
    }, err=> console.error('Error al cargar las secciones', err))
  }
  
}
