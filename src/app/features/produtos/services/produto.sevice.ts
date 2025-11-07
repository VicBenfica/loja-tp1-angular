import { inject, Inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.sevice';
import { Produto, ProdutoMapper } from '../../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);
  http = inject(HttpClient);

  private apiUrl = 'https://fakestoreapi.com/products';

  listar(): Observable<Produto[]> {
    this.logger.info('[ProdutoService] - listar() - consumindo API Externa');
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(lista => lista.map(json => ProdutoMapper.fromJson(json))),
      catchError(err => {
        this.logger.error('[ProdutoService] erro ao listar produtos', err);
        return of([]);
      })
    );
  }

  

  getById(id: number): Observable<Produto | undefined> {
  this.logger.info(`[ProdutoService] - getById(${id}) - consumindo API Externa`);
  
  // Monta a URL específica do produto
  const url = `${this.apiUrl}/${id}`;

  return this.http.get<any>(url).pipe(
    // Transforma o JSON retornado em Produto (usando o mapper)
    map(json => ProdutoMapper.fromJson(json)),
    // Delay apenas para simular tempo de resposta (igual às aulas)
    delay(500),
    // Tratamento de erro
    catchError(err => {
      this.logger.error(`[ProdutoService] erro ao buscar produto id=${id}`, err);
      // Retorna um Observable com "undefined" para evitar quebra no subscribe()
      return of(undefined);
    })
  );
}

}
