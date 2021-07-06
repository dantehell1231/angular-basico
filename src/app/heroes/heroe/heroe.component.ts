import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  nombre: string = 'Iron Man';
  edad: number = 45;

  get nombrecapitalizado(): string{
    return this.nombre.toLocaleUpperCase();
  }

  optenerNombre(): string {
    return `${this.nombre} - ${this.edad} `
  }

  cambiarNombre(): void{
    this.nombre = 'Spider Man'
  }

  cambiarEdad(): void{
    this.edad = 30;
  }
}
