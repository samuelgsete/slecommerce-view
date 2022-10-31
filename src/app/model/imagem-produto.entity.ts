import { EntidadeBase } from "./entidade-base.entity";
import { Produto } from "./produto.entity";

export class ImagemProduto extends EntidadeBase {

    public nomeRandomico!: string;
    public nomeOriginal!: string;
    public url!: string;
    public largura!: number;
    public altura!: number;
    public tamanho!: number;
    public estaRemovida: boolean = false;
    public estaSelecionada: boolean = false;
    public imagemPrincipal: boolean = false;
    public produto!: Produto;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}