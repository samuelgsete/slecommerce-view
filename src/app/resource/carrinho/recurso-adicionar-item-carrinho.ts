import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Carrinho } from "src/app/model/carrinho.entity";
import { ItemCarrinho } from "src/app/model/ItemCarrinho";
import { Produto } from "src/app/model/produto.entity";
import { AdicionarItemCarrinhoService } from "src/app/usecases/carrinho/adicionar-item-carrinho.service";
import { RecursoBase } from "../recurso-base";
import { RecursoObterQtdProdutosCarrinho } from "./recurso-obter-qtd-produtos-carrinho";

@Injectable()
export class RecursoAdicionarItemCarrinho extends RecursoBase<Carrinho> {

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly adicionar: AdicionarItemCarrinhoService,
        private readonly obterQtdProdutos: RecursoObterQtdProdutosCarrinho
    ) {
        super();
    }

    public executar(carrinhoId: number, produtoAdicionado: Produto): void {
        this.spinner.show();
        const novoItem = new ItemCarrinho({
            quantidade: 1,
            produto: produtoAdicionado,
            selecionado: true,
        })
        this.adicionar.executar(carrinhoId, novoItem).subscribe(response => {
            this.estaConcluido.emit(response);
            this.toastr.success('O produto foi adicionado ao seu carrinho', 'Tudo Ok!', { progressBar: true });
        }, algoErrado => {
            this.toastr.error('Não foi possivel adicionar', 'Poooxa!', { progressBar: true });
        }).add(() => {
        this.spinner.hide();
        })
    }
}