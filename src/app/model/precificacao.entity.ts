import { EntidadeBase } from "./entidade-base.entity";

export class Precificacao extends EntidadeBase {

    public precoBase: number = 0;
    public precoAvista: number = 0;
    public precoParcelamento: number = 0;
    public taxaDescontoParcelamento: number = 0;
    public taxaDescontoAvista: number = 0;
    public descontoAvista: number = 0;
    public descontoParcelamento: number = 0;
    public parcelamento: number = 0;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}