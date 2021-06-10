import { BaseEntity } from "../baseEntity";

export interface Admin extends BaseEntity {
    emaiL: string
    password: string
    mensaje: string
}