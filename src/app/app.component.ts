import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  constructor( private primeNGC: PrimeNGConfig ) {}

  ngOnInit(): void {
    this.primeNGC.ripple = true;
  }
  // nombre: string = 'Fernando';
  // valor: number = 1000;
  // obj = {
  //   nombre: 'Fernando'
  // }

  // mostarNombre() {
  //   console.log( this.nombre );
  //   console.log( this.valor );
  // }
  
}
