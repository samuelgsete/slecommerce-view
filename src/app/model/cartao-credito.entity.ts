import { EntidadeBase } from "./entidade-base.entity";

export class CartaoCredito extends EntidadeBase {

    public numero!:     string
    public titular!:    string
    public validade!:   string
    public cvv!:        string
    public bandeira!:   string

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}