import { EntidadeBase } from "./entidade-base.entity";
import { ItemCarrinho } from "./ItemCarrinho";
import { ResumoPedido } from "./resumo-pedido.entity";

export class Carrinho extends EntidadeBase {
    
    public subtotal!: number;
    public totalItens!: number;
    public itens: ItemCarrinho[] = [];
    public resumoPedido: ResumoPedido = new ResumoPedido();

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}