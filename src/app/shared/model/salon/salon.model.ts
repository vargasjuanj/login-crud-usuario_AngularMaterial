import { BaseEntity } from "../baseEntity";
import { Anfitrion } from "../persona/usuario/anfitrion/anfitrion.model";
import { Invitado } from "../persona/usuario/invitado/invitado.model";
import { Foto } from "../shared/foto.model";
import { Ubicacion } from "./ubicacion.model";

export interface Salon extends BaseEntity{
    nombre: string
    invitados?: Invitado[]
    anfitrion?: Anfitrion
    ubicacion: Ubicacion
    fotos?: Foto[]
}