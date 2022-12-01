import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Carrinho } from "src/app/model/carrinho.entity";
import { ItemCarrinho } from "src/app/model/ItemCarrinho";
import { EditarQtdItemCarrinhoService } from "src/app/usecases/carrinho/editar-qtd-item-carrinho.service";
import { RecursoBase } from "../recurso-base";

@Injectable()
export class RecursoSelecionarItemCarrinho extends RecursoBase<Carrinho> {
    
    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly editar: EditarQtdItemCarrinhoService
    ) { 
        super() 
    }

    public executar(carrinhoId: number, itemSelecionado: ItemCarrinho, estaSelecionnado: boolean): void {
        this.spinner.show()
        itemSelecionado.selecionado = estaSelecionnado;
        this.editar.executar(carrinhoId, itemSelecionado).subscribe(resposta => {
            this.estaConcluido.emit(resposta);
        }, algoErrado => {
            this.toastr.error('Não foi possivel selecionar o item', 'Poooxa!', { progressBar: true })
        }).add(() => {
            this.spinner.hide()
        })
    }
}