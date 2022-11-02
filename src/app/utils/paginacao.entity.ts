export class Paginacao {

    public palavraChave: string = '';
    public totalElementos: number = 0;
    public paginaAtual: number = 0;
    public tamanhoPagina: number = 20;
    public ultimaPagina: boolean = true;
    public primeiraPagina: boolean = true;

    public constructor(values: Object = {}) { Object.assign(this, values) }
}