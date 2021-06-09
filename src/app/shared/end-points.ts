import { environment } from "@env";

  

export class EndPoints {
 static ARTICULOS = environment.REST_CORE + 'articulos';
  static ARTICULOS_CON_FOTO = EndPoints.ARTICULOS+'/foto';
  static CATEGORIAS = environment.REST_CORE + 'categorias';
  static INVITADOS = environment.REST_CORE + 'invitados';
  static INVITADOS_POR_NOMBRE_Y_SEGUNDO_NOMBRE = EndPoints.INVITADOS+'/por-nombres'
  static INVITADOS_POR_NOMBRE_Y_APELLIDO = EndPoints.INVITADOS+'/por-nombre-apellido'
}