import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'envio'
})
export class EnvioPipe implements PipeTransform {

  transform(value:boolean): unknown {
    console.log(value)
    let texto:string="";
    value===true?  texto="Enviado":texto="Pendiente"
    
    return texto;
  }

}
