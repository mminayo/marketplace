import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg:any ): any {
    const resultadoArticulo = [];
    for(let articulo of value){
      if(articulo.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultadoArticulo.push(articulo);
      }
    }
    return resultadoArticulo;
  }

}
