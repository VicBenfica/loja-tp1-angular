export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imagemURL?:string;
    promo?: boolean;
}
