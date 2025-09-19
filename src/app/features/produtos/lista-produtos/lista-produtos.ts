import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

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
      nome: 'O Mochileiro das Galáxias',
      descricao: 'Douglas Adams - Fantasia',
      preco: 50.00,
      imageURL: 'images/MochileiroDasGalaxias.jpeg',
      promo: true,
      estado: 'novo'
    },
    {
      id: 2,
      nome: 'O Processo',
      descricao: 'Franz Kafka - Suspense',
      preco: 47.92,
      imageURL: 'images/Processo.png',
      estado: 'usado'
    },
    {
      id: 3,
      nome: 'O Guia do Mochileiro das Galáxias',
      descricao: 'Stephen Chbosky - Infantil',
      preco: 50.90,
      imageURL: 'images/VantagensInvisivel.png',
      estado: 'esgotado'
    }
  ]

  apenaspromo = signal(false);

  prodExibidos = computed(() => this.apenaspromo() ? this.produtos.filter(p => p.promo) : this.produtos);

  alternarPromo(){
    this.apenaspromo.update(p => !p);
  }

  onAddProduto(produto: {id: number, quantity: number}){
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);
  }

  onViewProduct(id: number){
    alert(`Id do produto: ${id}`);
  }
}