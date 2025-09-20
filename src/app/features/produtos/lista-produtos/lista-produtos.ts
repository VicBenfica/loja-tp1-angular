import { Component, computed, inject, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { Router } from '@angular/router';
import { ProdutoSevice } from '../services/produto.sevice';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';



@Component({
  selector: 'lista-produtos',
  imports: [CardProduto, CommonModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  private produtoService = inject(ProdutoSevice);
  private router = inject(Router);

  private produtos = toSignal<Produto[], Produto[]>(this.produtoService.listar(), {
    initialValue: []
  });

  apenaspromo = signal(false);

  prodExibidos = computed(() => {
    return this.apenaspromo()
      ? this.produtos().filter(p => p.promo)
      : this.produtos();
  }
  );

  alternarPromo() {
    this.apenaspromo.update(p => !p);
  }

  onAddProduto(produto: { id: number, quantity: number }) {
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);
  }

  onViewProduct(id: number) {
    this.router.navigate(['/produtos', id]);
  }
}