import { Articulo } from "@shared/model/stock/articulo.model";
import { Usuario } from "../usuario.model";

export interface Invitado extends Usuario{
    articulos : Articulo[]
}