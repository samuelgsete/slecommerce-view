import { Cor } from "./cor.entity";
import { EntidadeBase } from "./entidade-base.entity";
import { Especificacao } from "./especificacao.entity";
import { ImagemProduto } from "./imagem-produto.entity";
import { Precificacao } from "./precificacao.entity";

export class Produto extends EntidadeBase {

    public nome: string = ''
    public precificacao: Precificacao = new Precificacao()
    public fabricante: string = ''
    public marca: string = ''
    public modelo: string = ''
    public linha: string = ''
    public garantia: number = 0
    public estoque: number = 0
    public unidadesVendidas: number = 0
    public detalhes: number = 0
    public freteGratis: boolean = false
    public aprovacaoMedia: number = 0
    public condicao: string = ''
    public recemLancado: boolean = true;
    public conteudoEmbalagem: string = ''
    public altura: number = 0
    public largura: number = 0
    public profundidade: number = 0
    public peso: number = 0
    public imagens: ImagemProduto[] = []
    public especificacoes: Especificacao[] = []
    public cor: Cor = new Cor();

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}