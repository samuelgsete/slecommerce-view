import { Cor } from "./cor.entity";
import { EntidadeBase } from "./entidade-base.entity";
import { Especificacao } from "./especificacao.entity";
import { ImagemProduto } from "./imagem-produto.entity";
import { Precificacao } from "./precificacao.entity";

export class Produto extends EntidadeBase {

    public nome!: string
    public precificacao!: Precificacao
    public fabricante!: string
    public marca!: string
    public modelo!: string
    public linha!: string
    public garantia!: number
    public estoque!: number
    public unidadesVendidas!: number
    public detalhes!: number
    public freteGratis!: boolean
    public aprovacaoMedia!: number
    public condicao!: string
    public recemLancado!: string;
    public conteudoEmbalagem!: string
    public altura!: number
    public largura!: number
    public profundidade!: number
    public peso!: number
    public imagens: ImagemProduto[] = []
    public especificacoes: Especificacao[] = []
    public cor!: Cor;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}