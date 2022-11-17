import { EntidadeBase } from "./entidade-base.entity";
import { Produto } from "./produto.entity";

export class ItemCarrinho extends EntidadeBase {
    
    public quantidade!: number;
    public produto!: Produto;
    public selecionado!: boolean;
    public atualizando: boolean = false;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}