import { EntidadeBase } from "./entidade-base.entity";

export class ImagemProduto extends EntidadeBase {

    public nomeRandomico!: string
    public nomeOriginal!: string
    public url!: string
    public largura!: number
    public altura!: number
    public tamanho!: number
    public estaRemovida: boolean = false;
    public estaSelecionada: boolean = false;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}