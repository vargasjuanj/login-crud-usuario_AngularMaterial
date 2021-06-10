import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  constructor(private sanitizer: DomSanitizer) { }

  imagenes = ['1','2','3','4']

  ngOnInit() {


  }

}
