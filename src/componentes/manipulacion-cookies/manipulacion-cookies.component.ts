import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-manipulacion-cookies',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './manipulacion-cookies.component.html',
  styleUrl: './manipulacion-cookies.component.css'
})
export class ManipulacionCookiesComponent implements OnInit{
  nombreUsuario: string = '';
  saludo: string = '';

  ngOnInit():void{
    this.nombreUsuario = this.getCookie('nombreUsuario') || '';
    if (this.nombreUsuario){
      this.saludo = 'Hola, ' + this.nombreUsuario;
    }
  }
  setCookie(nombre: string, valor: string, dias: number):void{
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias*24*60*60*1000));
    const expira = 'expires=' + fecha.toUTCString();
    document.cookie = nombre + '=' + valor + ';' + expira + ';path=/';
  }
  getCookie(nombre: string): string | null {
    const nombreEQ = nombre + "=";
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i].trim();
      if (cookie.indexOf(nombreEQ) == 0) {
        return cookie.substring(nombreEQ.length, cookie.length);
      }
      console.log(cookie);
    }
    return null;
  }
  borrarCookie(nombre: string): void {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    this.nombreUsuario = '';
    this.saludo = '';
  }
  guardarNombre():void{
    if(this.nombreUsuario){
      this.setCookie('nombreUsuario', this.nombreUsuario, 1);
      this.saludo = 'Hola, ' + this.nombreUsuario;
    }
  }


}
