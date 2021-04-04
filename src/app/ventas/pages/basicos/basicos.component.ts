import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'zxzx';
  nombreUpper: string = 'ZXZX';
  nombreCompleto: string = 'OsCaR MIGuel';

  fecha: Date = new Date(); // Dia de hoy

}
