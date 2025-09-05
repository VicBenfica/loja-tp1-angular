import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from '../card-produto/card-produto';

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Produto 1',
      descricao: 'Desc: Prod1',
      preco: 179.90,
      //imagenURL: 
      promo:true
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Desc: Prod 2',
      preco: 179.90
    },
    {
      id: 3,
      nome: 'Produto 3',
      descricao: 'Desc: Prod 3',
      preco: 179.90

    }
  ]

  onAddProduct(produto:{id:number,quatity:number}){
    alert(`Produto ${produto.id},${produto.quatity} unidades`);
  }
}
