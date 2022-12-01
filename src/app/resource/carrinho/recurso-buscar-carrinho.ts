import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Carrinho } from "src/app/model/carrinho.entity";
import { BuscarCarrinhoService } from "src/app/usecases/carrinho/buscar-carrinho.service";
import { RecursoBase } from "../recurso-base";

@Injectable()
export class RecursoBuscarCarrinho extends RecursoBase<Carrinho> {

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly buscar: BuscarCarrinhoService
    ) {
        super();
    }

    public executar(clienteId: number): void {
        this.spinner.show()
        this.buscar.executar(clienteId).subscribe(response => {
          this.estaConcluido.emit(response)
        }, algoErrado => {
            this.toastr.error('Não foi possivel buscar o carrinho', 'Poooxa!', { progressBar: true })
        }).add(() => {
            this.spinner.hide()
        })
    }
}