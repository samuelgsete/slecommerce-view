import { EntidadeBase } from "./entidade-base.entity";
import { Produto } from "./produto.entity";

export class ProdutosFavoritos extends EntidadeBase {

    public produtos!: Produto[];

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}