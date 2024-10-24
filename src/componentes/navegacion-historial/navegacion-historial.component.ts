import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navegacion-historial',
  standalone: true,
  imports: [],
  templateUrl: './navegacion-historial.component.html',
  styleUrl: './navegacion-historial.component.css'
})
export class NavegacionHistorialComponent {

  constructor(private location: Location) { }

  irAtras() {
    this.location.back();
  }
  irAdelante() {
    this.location.forward()
  }

}
