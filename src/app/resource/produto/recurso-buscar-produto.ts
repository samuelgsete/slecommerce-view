import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Produto } from "src/app/model/produto.entity";
import { BuscarProdutoService } from "src/app/usecases/produto/buscar-produto.service";

@Injectable()
export class RecursoBuscarProduto {

    private finalizando: EventEmitter<Produto> = new EventEmitter<Produto>();

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private buscar: BuscarProdutoService
    ) {}

    public ok(): EventEmitter<Produto> {
        return this.finalizando;
    }

    public executar(produtoId: number): void {
        this.spinner.show();
        this.buscar.executar(produtoId).subscribe(resposta => {
          this.finalizando.emit(resposta)
          this.spinner.hide();
        }, algoErrado => {

        }).add(() => {
          this.spinner.hide();
        });
    }
}