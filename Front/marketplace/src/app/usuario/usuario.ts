import { Pedido } from "../pedidos/pedido";

export class Usuario {
  id:number = 0;
  nombre:string = '';
  password:string = '';
  listaPedidos:Pedido[] = [];
}
