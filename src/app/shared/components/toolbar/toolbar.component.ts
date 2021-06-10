import { Component, OnInit } from '@angular/core';
import { trigger, style, state, keyframes, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  animations: [
    trigger('animarTitulo', [

      state('agrandarDerecha', style({
        transform: 'translateX(200%)'
      })),

      state('achicarIzquierda', style({ transform: 'translateX(-200%)', opacity: 1 })),

      transition('achicarIzquierda=>agrandarDerecha', [animate('2s ease-in', keyframes([
        style({ transform: 'scale(1.5)', offset: 0 }),
        style({ transform: 'scale(1.4)', offset: 0.4 }),
        style({ transform: 'scale(1.2)', offset: 0.8 }),
        style({ transform: 'scale(1)', offset: 1 })
      ]))]),




      transition('agrandarDerecha => achicarIzquierda', [
        animate(2000, keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.1)', offset: 0.4 }),
          style({ transform: 'scale(1.3)', offset: 0.8 }),
          style({ transform: 'scale(1.5)', offset: 1 })
        ]))
      ])


    ])
  ]
})
export class ToolbarComponent implements OnInit {

  estado = 'achicarIzquierda'

  constructor() { }

  ngOnInit(): void {
    this.animarTitulo()
  }

  animarTitulo() {
    setInterval(() => {
      this.estado = this.estado === 'achicarIzquierda' ? 'agrandarDerecha' : 'achicarIzquierda'


    }, 5000)
  }

}
