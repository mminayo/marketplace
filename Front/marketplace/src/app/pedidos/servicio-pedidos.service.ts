import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class ServicioPedidosService {

  private url = environment.BACK_URL + 'pedidos';


  constructor(private http:HttpClient) {

   }

   getAll():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url);
  }

   getPedidos():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url);
   }

   getPedidosId(pedidoId:number):Observable<Pedido>{
    return this.http.get<Pedido>(this.url +'/'+pedidoId);
   }

   getPedidosNombre(pedidoNombre:string):Observable<Array<Pedido>>{
    return this.http.get<Array<Pedido>>(this.url+'/?nombre_like='+pedidoNombre);
   }

   postPedido(pedido:Pedido):Observable<Pedido>{
     return this.http.post<Pedido>(this.url,pedido);
   }

   updatePedido(pedidoId:number, pedido:Pedido): Observable<Pedido>{
      return this.http.put<Pedido>((this.url+'/'+pedidoId), pedido);
   }

   deletePedido(pedidoId:number):Observable<Pedido>{
    return this.http.delete<Pedido>(this.url +'/'+pedidoId);
     }
}
