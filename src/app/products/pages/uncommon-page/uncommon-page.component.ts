import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select

  public name:string = 'John';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'female': 'invitarla'
  }


  changeClient() :void{
    this.name = 'Jane';
    this.gender = 'female';
  }


  //i18nPlural

  public clients:string [] = ['john', 'jhony', 'jack', 'elizabeth', 'jane'];
  public clientsMap = {
    '=0': 'no tenemso ningun cliente esperando',
    '=1': 'tenemso un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',
  }
  deleteClient():void{
    this.clients.shift();
  }


  //key.value pipe

  public person = {
    name: 'Fernando',
    age: 36,
    addredd: 'Ottawa, Canada'
  }


  //asinc pipe
                   //? interval de rxjs crea un observable que emite un valorada x milisegundos
  public myOservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );


  public promiseValue : Promise<string>= new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log('Tenemos data en la promesa')
    }, 3500)
  } )
}
