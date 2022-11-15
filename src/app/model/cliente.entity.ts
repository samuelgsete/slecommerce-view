import { EntidadeBase } from "./entidade-base.entity";
import { Carrinho } from "./carrinho.entity";

export class Cliente extends EntidadeBase {

    public nome!: string;
    public sobrenome!: string;
    public cpf!: string;
    public email!: string;
    public telefone!: string;
    public usuario!: string;
    public senha!: string;
    public carrinho: Carrinho = new Carrinho();

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}