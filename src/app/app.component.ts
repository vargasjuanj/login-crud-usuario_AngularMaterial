import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, style, state, transition, animate } from '@angular/animations'
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animarRuta', [
      state('void', style({
        transform: ('translateX(-100%)'),
        opacity: 0.5
      })),
      transition(':enter', [
        animate(2000, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate(2000, style({
          transform: 'translateX(100%)',
          opacity: 1
        }))
      ])
    ])
  ]
}
)

export class AppComponent {

  title = 'plicacion';
  temaDeFondo = 'por-defecto'
  @HostBinding('class') temaDelComponente: any;

  constructor(public objetosFlotantes: OverlayContainer) { }

  ngOnInit(): void {
  }


  cambiarTema(nombreDelTema: string) { //Recibe el nombre de la clase que va a aplicar
    this.objetosFlotantes.getContainerElement().classList.add(nombreDelTema);
    if (nombreDelTema === 'dark-theme') {
      this.temaDeFondo = 'dark'
    } else {
      this.temaDeFondo = ''
    }
    this.temaDelComponente = nombreDelTema;
  }
  animarRuta(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

