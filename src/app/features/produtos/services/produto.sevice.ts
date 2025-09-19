import { Inject, Injectable } from '@angular/core';
import { LoggerSevice } from '../../../core/services/logger/logger.sevice';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoSevice {
  logger = Inject(LoggerSevice);

  private readonly listaMock: Produto[] = [

    {
      id: 1,
      nome: 'Produto 1',
      descricao: 'Produto 1',
      preco: 178.90,
      promo: true,
      estado: 'novo'
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Produto 2',
      preco: 100,
      estado: 'usado'
    },
    {
      id: 3,
      nome: 'Produto 3',
      descricao: 'Produto 3',
      preco: 78.90,
      estado: 'esgotado'
    }
  ];

  listar():Observable<Produto[]>{
    this.logger.info('[ProdutoService] - Listando produtos');
    return of(this.listaMock).pipe(delay(1000));//1 segundo
  }
  
}
