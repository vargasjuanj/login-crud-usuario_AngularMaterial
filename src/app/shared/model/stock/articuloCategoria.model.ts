import { BaseEntity } from "../baseEntity";

export interface ArticuloCategoria extends BaseEntity {
    nombre?: string
    categoriashijas?: ArticuloCategoria[]
}