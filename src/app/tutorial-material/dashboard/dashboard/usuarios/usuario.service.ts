import { Injectable } from '@angular/core';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  USUARIOS: Usuario[] = [
    {usuario: "rodriguez1234", nombre: 'Pedro',apellido:'Rodriguez',sexo:'Masculino'},
    {usuario: "2021anto", nombre: 'Antonela',apellido:'Sarati',sexo:'Femenino'},
    {usuario: "migue33", nombre: 'Miguel',apellido:'Perez',sexo:'Masculino'},
    {usuario: "facufacu", nombre: 'Facundo',apellido:'Ferroso',sexo:'Masculino'},
    {usuario: "Laura3e", nombre: 'Laura',apellido:'Martinez',sexo:'Femenito'},
    {usuario: "JUli202", nombre: 'Julieta',apellido:'Jacinta',sexo:'Femenino'},
    {usuario: "pacoperez", nombre: 'Paco',apellido:'Perez',sexo:'Masculino'},
    {usuario: "pelusa20", nombre: 'Pamela',apellido:'Posadas',sexo:'Femenino'},
    {usuario: "caroncho", nombre: 'Claudo',apellido:'Colichea',sexo:'Masculino'},
    {usuario: "pepapig", nombre: 'Pedro',apellido:'Piglea',sexo:'Masculino'},
     {usuario: "marito", nombre: 'Mario',apellido:'StronheilserBurgerKingJs',sexo:'Masculino'}
  ];
  
  constructor() { }

  cargarTodos(){
   // return this.USUARIOS.slice() //Este método retorna una copia de la lista de usuarios, no es la referencia
   return this.USUARIOS
  }

   eliminar(index: number){
    this.USUARIOS.splice(index,1)
   }

   guardar(usuario: Usuario) {
     console.log('usuario',usuario)
   this.USUARIOS.push(usuario)
  }
  cargar(index: number) {
   return  this.USUARIOS[index]
  }

  editar(usuario: Usuario, index: number) {
   this.USUARIOS[index] = usuario
   }




}
