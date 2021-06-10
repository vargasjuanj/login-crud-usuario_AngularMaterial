import { Foto } from "@shared/model/shared/foto.model";
import { Persona } from "../persona.model";

export interface Usuario extends Persona{
    email?: string
    password?: string
    fechaDeAlta?: Date
    fechaDeBaja?: Date
    foto? : Foto
    mensaje?: string
    rol?: string



}