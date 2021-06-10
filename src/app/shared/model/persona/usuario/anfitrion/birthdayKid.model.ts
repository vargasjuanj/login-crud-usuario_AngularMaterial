import { Foto } from "@shared/model/shared/foto.model";
import { Persona } from "../../persona.model";

export interface BirthDayKid extends Persona{
    fotos?: Foto[]
}