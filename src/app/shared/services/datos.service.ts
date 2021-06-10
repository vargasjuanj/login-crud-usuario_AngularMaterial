import { Injectable } from '@angular/core';
import { Invitado } from '@shared/model/persona/usuario/invitado/invitado.model';
import { Articulo } from '@shared/model/stock/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {


  categorias = ['Bebida', 'Comida', 'Golosina', 'Postre', 'Snack','Otra'];
  tiposDeMarcas = ['Es casero/a', 'Otra']
  tiposGenerales : Array<string> = []
  //    SECCIONES

  // Invitado

  //Esto rellena el componente secciones de Invitado
  seccionesDeInvitado = ['Inicio', 'Lugar', 'Host', 'Perfil']
  iconosDeInvitado = ['home', 'place', 'phone', 'persona']
  //La primer ruta hace referencia a la del module, ya que el componente que la usa tiene na rauta vacia ''
  rutasDeInvitado = ['invitado', 'lugar', 'anfitrion', 'mi-perfil']

  

  // Seccioens Anfitrion
  seccionesDeAnfitrion = ['Invitados', 'Articulos', 'Lugar', 'Perfil']
  iconosDeAnfitrion = ['face', 'shopping_cart', 'place', 'persona']
  rutasDeAnfitrion = ['anfitrion', 'articulos', 'lugar', 'mi-perfil']



    //      CATEGORIAS

  // Categoria Bebida
  medidasDeBebidas = ['500cc', '750cc', '1L', '1.5L', '2L', '2.25L', '2.50L', '3L', '5L'];
  tiposDeBebidas = ['Alcohol', 'Jugo', 'Gaseosa',];
  marcasDeGaseosas = ['Coca Cola', 'Doble Cola', 'Fanta', 'Manaos', 'Pepsi', 'Seco', 'Seven Up', 'Talca', 'Otra'];
  marcasDeJugos = ['Clight', 'Mix', 'Rinde 2', 'Tang', 'Otra'];
  tiposDeAlcoholicas = ['Aperitivo', 'Cerveza', 'Fernet', 'Vino'];
  marcasDeCervezas = ['Andes', 'Brahma', 'Quilmes', 'Scheneider', 'Otra'];
  marcasDeVinos = ['Malbec', 'Uvita', 'Otra'];
  marcasDeFernets = ['Branca', 'Fernandito', 'Fernanflo', 'Otra'];
  marcasDeAperitivos = ['Marcella', 'Otra'];

  // Categoria Comida


  tiposDeComidas = ['Empanadas', 'Panchos', 'Pizzas','Pollo','Carne', 'Albondigas','Sachicha/salsa', 'Otra'];
  tiposDeGolosinas = ['Chupetines','Chocolates','Masticables','Alfajores','Otra'];
  tiposDePostres = ['Gelatina', 'Flan', 'Biscochuelo','Budin','Galletas','Torta', 'Otra'];
  tiposDeSnacks =['Chisitos', 'Puflitos','Papitas','Palomitas']
  tiposDeOtra = ['Piñata', 'Globos', 'Mascaras','Aerosol', 'Otra'];
  medidasGenerales = ['kg','g','Unidad/es', 'Porcion/es', 'Docena/s','L'];


  articulos : Articulo[] = []

  //para usarlo en el guard
  invitado : Invitado = {articulos:[],nombre:'',apellido:''}

  constructor() { }
}
