import { Articulo } from "../articulo/articulo";

export interface PedidoInterfaz {
    id: number;
    name: string;
    fecha: Date;
    price: number;
    quantity:number;
    listaarticulos:Array<Articulo>;
}
