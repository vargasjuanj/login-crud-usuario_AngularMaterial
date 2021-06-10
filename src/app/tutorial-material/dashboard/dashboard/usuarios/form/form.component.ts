import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() titulo = ''

  usuario! : Usuario 
  index! : string 

  formulario = this.fb.group({
    usuario: [null, Validators.required],
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    sexo: [null, Validators.required]
    });


  sexos = [
'Masculino','Femenino'
  ];

  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, 
    private servicioDeUsuario: UsuarioService) {}


  ngOnInit(): void {

    this.analizarRuta()

 
  }

  analizarRuta(){
    this.activatedRoute.params.subscribe(params =>{
      let index = Number(params['index'])
      this.index = params['index']
      if (params['index']){
        this.titulo = 'Editar Usuario'
        this.usuario = this.servicioDeUsuario.cargar(index)
        this.formulario.setValue(this.usuario)

      }else{
        this.titulo = 'Guardar Usuario'
      }
    })
  }

  onSubmit(): void {

    if(this.index){
      alert('editar!');
      let index = Number(this.index)
      this.servicioDeUsuario.editar(this.formulario.value as Usuario, index)
    }else{
      alert('guardar')
      
      this.servicioDeUsuario.guardar(this.formulario.value as Usuario)
    }
  }
  volver(){
   
    this.router.navigate(['./dashboard/usuarios'])

  }
}


