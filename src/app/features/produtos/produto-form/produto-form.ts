import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/forms';
import { ProdutoService } from '../services/produto.service';

import { Router } from '@angular/router';

@Component({
    selector: 'app-produto-form',
    imports: [DescontoPipe, CurrencyPipe, Produto],
    templateUrl: './produto-detalhe.html',
    styleUrl: './produto-detalhe.css'
})
export class ProdutoForm {
    private router = inject(Router);
    private produtoService = inject(ProdutoService);

    enviando = signal(false);
    mensagem = signal('');
    novaCategoria = signal('');
    categoriaSelecionada = signal('');

    novoProduto: Produto = {
        id: 0,
        nome: '',
        descricao: '',
        preco: 0,
        imageURL: '',
        categoria: ''
    }
    private produtos = toSignal(this.produtoService.listar(), { initialValue: [] });

    categorias = computed(() => {
        const lista = this.produtos().map(p => p.categoria);
        const unicos = Array.from(new Set(lista));
        return [...unicos, 'Outros'];
    });

    mostrarNovaCategoria = computed(() => this.categoriaSelecionada() == 'Outra');

    onSubmit(form: NgForm) {
        if (form.invalid) {
            this.mensagem.set('Houve um erro de validacao dos campos');
            return;
        }
        this.novoProduto.categoria = this.categoriaSelecionada() == 'Outra'
            ? this.novaCategoria()
            : this.categoriaSelecionada();

            this.enviando.set(true);
            this.mensagem.set('Enviando produto...');
            this.produtoService.criar(this.novoProduto).subscribe(
                {
                    next: (res) =>{
                        this.mensagem.set('Produto cirado com sucesso');
                        console.console.log((res));
                        form.resetForm();
                        setTimeout(() => this.router.navigate(['/produtos']), 1200);
                        
                    },
                    error:(res)=>{
                        this.mensagem.set('Houve um erro');
                        console.log(res);
                    },
                    complete:()=> this.enviando;set(false);

                }
            )
    }

    onReturnToList() {
        this.router.navigate(['/produtos']);
    }
    validarNome(nome:string){
        
    }
}
