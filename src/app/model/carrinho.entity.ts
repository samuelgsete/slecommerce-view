import { EntidadeBase } from "./entidade-base.entity";
import { ItemCarrinho } from "./ItemCarrinho";

export class Carrinho extends EntidadeBase {
    
    public subtotal!: number;
    public totalItens!: number;
    public itens: ItemCarrinho[] = [];

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}