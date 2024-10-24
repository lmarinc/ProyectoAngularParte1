import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-fecha-hora',
  standalone: true,
  imports: [],
  templateUrl: './fecha-hora.component.html',
  styleUrl: './fecha-hora.component.css'
})
export class FechaHoraComponent implements OnInit, OnDestroy {
  fechaHoraActual: string = '';
  private intervalId: any;

  ngOnInit(): void {
    this.actualizarFechaHora();
    this.intervalId = setInterval(() => {
      this.actualizarFechaHora();
    }, 1000);
  }

  actualizarFechaHora(): void {
    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    this.fechaHoraActual = `${dia}-${mes}-${anio} ${horas}:${minutos}:${segundos}`;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
