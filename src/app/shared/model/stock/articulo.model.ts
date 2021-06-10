import { BaseEntity } from "../baseEntity";
import { Foto } from "../shared/foto.model";
import { ArticuloCategoria } from "./articuloCategoria.model";
import { MedidaGeneralEnum } from "./medida.enum";


export interface Articulo extends BaseEntity{
    cantidad?: number
    marca?: string
    medida?: string  //Las enumeraciones sirven para restringir la cantidad de valores es como un tipo mas. Si a un metodo le paso un parametro  de tipo enum sus posibles valores deben estar en el reango de la enum
    nombre?: string
    categoria: ArticuloCategoria //Esto al ser por agregacion en el back le tengo que meter un id
    foto: Foto
    descripcion?: string   
}