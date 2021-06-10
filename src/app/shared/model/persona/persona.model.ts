import { BaseEntity } from "../baseEntity";
import { Sexo } from "../enumeraciones/Sexo";

export interface Persona extends BaseEntity{
 
        nombre: string
        segundoNombre?: string
        apellido: string
        edad?: number
        fechaDeNacimiento?: Date
        sexo?: Sexo
}