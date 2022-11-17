import { EntidadeBase } from "./entidade-base.entity";

export class ResumoPedido extends EntidadeBase {

    public subtotalAvista: number = 0;
    public descontoAvista: number = 0;
    public subtotalParcelado: number = 0;
    public descontoParcelado: number = 0;
    public parcelamento: number = 0;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}