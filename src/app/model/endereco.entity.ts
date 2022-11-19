import { EntidadeBase } from "./entidade-base.entity";

export class Endereco extends EntidadeBase {
    
    public rua!: string
    public numero!: string
    public cep!: string
    public bairro!: string
    public municipio!: string
    public uf!: string
    public destinatario!: string
    public telefone!: string
    public enderecoPadrao!: boolean

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}