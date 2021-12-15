import { PedidoInterfaz } from "./pedidointerfaz";
import { Articulo, ArticuloPedido } from "../articulo/articulo";
import { Usuario } from "../usuario/usuario";

export class Pedido  {
    id: number = 0;
    name: string = '';
    fecha: string = '' ;
    price: number = 0;
    listaArticulosPedidos:ArticuloPedido[] = [];
    usuarioId:number = 0;

    constructor(){

    }


};
