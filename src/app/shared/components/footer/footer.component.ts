import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [

    trigger('animarTexto', [
      state('desaparecer', style({ })),
      state('aparecer', style({})),
      transition('desaparecer => aparecer', [
        animate(5000, keyframes([
          style({ transform: 'scaleY(0)', offset: 0 }),
          style({ transform: 'scaleY(0.1)', offset: 0.1 }),
          style({ transform: 'scaleY(0.2)', offset: 0.2 }),
          style({ transform: 'scaleY(0.3)', offset: 0.3 }),
          style({ transform: 'scaleY(0.4)', offset: 0.4 }),
          style({ transform: 'scaleY(0.5)', offset: 0.5 }),
          style({ transform: 'scaleY(0.6)', offset: 0.6 }),
          style({ transform: 'scaleY(0.7)', offset: 0.7 }),
          style({ transform: 'scaleY(0.8)', color: 'pink', offset: 0.8 }),
          style({ transform: 'scaleY(0.9)', color: 'pink', offset: 0.9 }),
          style({ transform: 'scaleY(1)', color: 'pink', offset: 1 })
        ]))
      ]),
      transition('aparecer => desaparecer', [
        animate(5000, keyframes([
          style({ transform: 'scaleY(1)', offset: 0 }),
          style({ transform: 'scaleY(0.9)', offset: 0.1 }),
          style({ transform: 'scaleY(0.8)', offset: 0.2 }),
          style({ transform: 'scaleY(0.7)', offset: 0.3 }),
          style({ transform: 'scaleY(0.6)', offset: 0.4 }),
          style({ transform: 'scaleY(0.5)', offset: 0.5 }),
          style({ transform: 'scaleY(0.4)', offset: 0.6 }),
          style({ transform: 'scaleY(0.3)', offset: 0.7 }),
          style({ transform: 'scaleY(0.2)', offset: 0.8 }),
          style({ transform: 'scaleY(0.1)', offset: 0.9 }),
          style({ transform: 'scaleY(0)', offset: 1 })
        ]))
      ])])




  ]





})
export class FooterComponent implements OnInit {

  estadoDelTexto = "aparacer"

  constructor() { }

  ngOnInit(): void {
    this.animarTexto()
  }

  animarTexto() {

    setInterval(() => {
      this.estadoDelTexto = this.estadoDelTexto === 'aparecer' ? 'desaparecer' : 'aparecer'
    }
      , 1000)


  }
}
