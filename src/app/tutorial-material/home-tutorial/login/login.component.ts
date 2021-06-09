import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup 

  constructor(private formBuilder: FormBuilder) {
    
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required] ,  //El valor inicial es vacio
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.formulario)
  }

}
