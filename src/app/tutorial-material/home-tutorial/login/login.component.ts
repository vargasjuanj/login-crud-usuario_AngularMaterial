import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup 
  loading = false

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required] ,  //El valor inicial es vacio
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.formulario.value.usuario
    const password = this.formulario.value.password
    
    if(usuario === 'admin' && password === 'admin'){
        this.loginFalso()
    }else{
      this.error()
      this.formulario.reset()
    }
  }

  error(){
    this.snackBar.open('Usuario o password invalidos','ok!',{
duration: 5000,
horizontalPosition: 'right',
verticalPosition: 'top'
// panelClass: ['snackbar']
    })
  }

  loginFalso(){
    this.loading = true
    setTimeout(()=>{
    this.router.navigate(['tutorial/dashboard'])
    },3000)
  }
}
