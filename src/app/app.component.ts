import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {FechaHoraComponent} from '../componentes/fecha-hora/fecha-hora.component';
import {NumeroAleatorioComponent} from '../componentes/numero-aleatorio/numero-aleatorio.component';
import {NavegacionHistorialComponent} from '../componentes/navegacion-historial/navegacion-historial.component';
import {VentanaComponent} from '../componentes/ventana/ventana.component';
import {Ventana2Component} from '../componentes/ventana2/ventana2.component';
import {ManipulacionCookiesComponent} from '../componentes/manipulacion-cookies/manipulacion-cookies.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaHoraComponent, NumeroAleatorioComponent, NavegacionHistorialComponent, VentanaComponent, Ventana2Component, ManipulacionCookiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoAngularParte1';
}
