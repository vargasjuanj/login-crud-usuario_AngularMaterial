import { Parentesco } from "@shared/model/enumeraciones/Parentesco";
import { Articulo } from "@shared/model/stock/articulo.model";
import { Usuario } from "../usuario.model";

export interface Anfitrion extends Usuario{

    urlGrupoDeWhatsApp?: string
    articulos?: Articulo[]
    parentesco: Parentesco
}