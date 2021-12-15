import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPedidos'
})
export class FilterPedidosPipe implements PipeTransform {

  transform(value: any, arg:any ): any {
    const resultadoPedido = [];
    for(let pedido of value){
      if(pedido.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultadoPedido.push(pedido);
      }
    }
    return resultadoPedido;
  }
}
