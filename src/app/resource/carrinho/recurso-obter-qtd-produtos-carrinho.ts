import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { ObterQtdProdutosCarrinho } from "src/app/usecases/carrinho/obter-qtd-produtos-carrinho";
import { RecursoBase } from "../recurso-base";

@Injectable()
export class RecursoObterQtdProdutosCarrinho extends RecursoBase<number> {

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly obterQuantidade: ObterQtdProdutosCarrinho
    ) { 
        super() 
    }

    public executar(clienteId: number): void {
        this.spinner.show()
        this.obterQuantidade.executar(clienteId).subscribe(resposta => {
            this.estaConcluido.emit(resposta);
        }, algoErrado => {
            this.toastr.error('Não foi possivel obter q quantidade de produtos', 'Poooxa!', { progressBar: true })
        }).add(() => {
            this.spinner.hide()
        });
    }
}