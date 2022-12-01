import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Carrinho } from "src/app/model/carrinho.entity";
import { ItemCarrinho } from "src/app/model/ItemCarrinho";
import { EditarQtdItemCarrinhoService } from "src/app/usecases/carrinho/editar-qtd-item-carrinho.service";
import { RecursoBase } from "../recurso-base";

@Injectable()
export class RecursoEditarQtdItem extends RecursoBase<Carrinho> {

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly editar: EditarQtdItemCarrinhoService
    ) { 
        super() 
    }
    
    public executar(carrinhoId: number, itemAdicionado: ItemCarrinho): void {
        this.spinner.show();
        this.editar.executar(carrinhoId, itemAdicionado).subscribe(response => {
            this.estaConcluido.emit(response)
        }, algoErrado => {
            this.toastr.error('Não foi possivel atualizar o carrinho', 'Poooxa!', { progressBar: true })
        }).add(() => {
            this.spinner.hide()
        })
    }
}