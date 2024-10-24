import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-ventana',
  standalone: true,
  imports: [],
  templateUrl: './ventana.component.html',
  styleUrl: './ventana.component.css'
})
export class VentanaComponent implements OnDestroy{
  nuevaVentana: Window | null = null;
  ancho: number = 0;
  alto: number = 0;

  abrirVentana(): void{
    this.nuevaVentana = window.open('', '', 'width=400,height=400');
    this.actualizarResolucion();

  }
  redimensionarVentana(ancho:number, alto:number): void{
    if(this.nuevaVentana){
      this.nuevaVentana.resizeTo(ancho, alto);
      this.actualizarResolucion();
    }
  }
  actualizarResolucion(): void {
    if (this.nuevaVentana) {
      this.ancho = this.nuevaVentana.innerWidth;
      this.alto = this.nuevaVentana.innerHeight;
    }
  }
  ngOnDestroy(): void {
    if (this.nuevaVentana) {
      this.nuevaVentana.close();
    }
  }


}
