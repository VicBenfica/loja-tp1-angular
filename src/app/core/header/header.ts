import { Component, input, signal } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  tituloLoja = input.required<string>(); //<app-header [tituloLoja]="'Titulo'"></app-header>
  
    

    exibirSobre(nome:String): void{
      alert(`Mensagem padrão ${nome}`);
      //titulo = 'Loja TP1';
    }
}
