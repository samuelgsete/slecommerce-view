import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Carrinho } from "src/app/model/carrinho.entity";
import { ItemCarrinho } from "src/app/model/ItemCarrinho";
import { RemoverItemCarrinhoService } from "src/app/usecases/carrinho/remover-item-carrinho.service";
import { RecursoBase } from "../recurso-base";

@Injectable()
export class RecursoRemoverItemCarrinho extends RecursoBase<Carrinho> {

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly remover: RemoverItemCarrinhoService
    ) { 
        super() 
    }

    public executar(carrinhoId: number, item: ItemCarrinho): void {
        this.spinner.show()
        this.remover.executar(carrinhoId, item).subscribe(response => {
            this.estaConcluido.emit(response)
            this.toastr.success('O Item foi removido do seu carrinho', 'Tudo Ok!', { progressBar: true });
        }, algoErrado => {
            this.toastr.error('Não foi possivel buscar o carrinho', 'Poooxa!', { progressBar: true })
        }).add(() => {
            this.spinner.hide()
        })
    }
}