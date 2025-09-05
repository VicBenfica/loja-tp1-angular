import { Component, input, output, signal } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  tituloLoja = input.required<string>(); //<app-header [tituloLoja]="'Titulo'"></app-header>
  
  textoSobre = output<string>();

  enviarSobre(){
    this.textoSobre.emit('Técnicas de Programação 1, desenvolvido por Victoria Benfica');
  }
    //exibirSobre(nome:String): void{
    // alert(`Mensagem padrão ${nome}`);
      //titulo = 'Loja TP1';
    //}
}
