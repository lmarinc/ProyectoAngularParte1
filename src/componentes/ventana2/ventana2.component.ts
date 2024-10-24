import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-ventana2',
  standalone: true,
  imports: [],
  templateUrl: './ventana2.component.html',
  styleUrl: './ventana2.component.css'
})
export class Ventana2Component implements OnDestroy{
  nuevaVentana: Window | null = null;
  ancho: number = 400;
  alto: number = 400;

  abrirVentana():void{
    this.nuevaVentana = window.open('','','width='+this.ancho+',height='+this.alto);
  }
  moverVentana(x:number,y:number):void{
    if (this.nuevaVentana){
      this.nuevaVentana.moveBy(x,y);
    }

  }
  ngOnDestroy(): void{
    if (this.nuevaVentana){
      this.nuevaVentana.close();
    }
  }

}
