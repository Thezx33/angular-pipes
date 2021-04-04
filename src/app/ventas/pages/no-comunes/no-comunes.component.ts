import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarCliente() {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }

  // i18nPlural
  clientes: string[] = [ 'Maria', 'pedro', 'Eduardo', 'Pedro' ];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'zxzx',
    edad: 35,
    direccion: 'asdasdasd'
  }


  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  // AsyncPipe
  miObservable = interval(2000);
  
  valorPromesa = new Promise( ( res, rej ) => {
    setTimeout(() => {
      res( 'Tenemos data de promesa' );
    }, 3500);
  });
}
