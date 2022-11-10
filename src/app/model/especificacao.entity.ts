import { EntidadeBase } from "./entidade-base.entity"

export class Especificacao extends EntidadeBase {
    
    public nome!: string;
    public valor!: string;
    public selecionado: boolean = false;
    public removida: boolean = false;
   
    public constructor(values: Object = {}) {
        super()
        Object.assign(this, values);
    }
}