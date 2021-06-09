import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  temaDeFondo = 'por-defecto'
  @HostBinding('class') temaDelComponente: any;
  
  constructor(public objetosFlotantes: OverlayContainer) { }

  ngOnInit(): void {
  }


  cambiarTema(nombreDelTema: string){ //Recibe el nombre de la clase que va a aplicar
    this.objetosFlotantes.getContainerElement().classList.add(nombreDelTema);
    if(nombreDelTema === 'dark-theme'){
      this.temaDeFondo = 'dark'
   }else{
     this.temaDeFondo = ''
   }
    this.temaDelComponente = nombreDelTema;
  }
}
