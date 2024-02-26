import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'toggleCase'
})
 export class ToggleCasePipe implements PipeTransform{

//* cuando tenemos mas de 2 o 3 argumentos vale mas la pena devolver un objeto
  transform(value: string, toUpper:boolean = false ):string {

    console.log({value, toUpper})

    return (toUpper)
    ? value.toUpperCase()
    : value.toLowerCase();
  }


}
