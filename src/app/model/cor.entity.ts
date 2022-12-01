import { EntidadeBase } from "./entidade-base.entity";

export class Cor extends EntidadeBase {
    
    public nome: string = '';
    public codigo: string = ''; // código hexadecimal

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}