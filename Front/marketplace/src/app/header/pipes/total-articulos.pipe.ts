import { Pipe, PipeTransform } from '@angular/core';
import { Articulo } from '../../articulo/articulo';

@Pipe({
  name: 'totalArticulos'
})
export class TotalArticulos implements PipeTransform {

  transform(value: Array<Articulo>,propiedad:string):number {
    return value.reduce((acumulado, actual:Articulo)=>acumulado+actual.stock,0);
  }

}