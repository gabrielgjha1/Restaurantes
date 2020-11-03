import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pedidoUSUARIO'
})
export class PedidoUSUARIOPipe implements PipeTransform {

  transform(value: boolean): unknown {
    console.log(value)
    let valor:number=0;
    value===true?  valor=50:valor=22;
    return valor;
  }

}
