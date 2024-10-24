import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-numero-aleatorio',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './numero-aleatorio.component.html',
  styleUrl: './numero-aleatorio.component.css'
})
export class NumeroAleatorioComponent {
  numerosAleatorios: number[] = [];
  cantidadNumeros: number = 5;
  generarNumerosAleatorios(): void {
    this.numerosAleatorios = [];
    for (let i = 0; i < this.cantidadNumeros; i++) {
      const numero = Math.floor(Math.random() * 100) + 1;
      this.numerosAleatorios.push(numero);
    }
  }


}
