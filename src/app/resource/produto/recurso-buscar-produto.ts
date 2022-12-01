import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Produto } from "src/app/model/produto.entity";
import { BuscarProdutoService } from "src/app/usecases/produto/buscar-produto.service";
import { RecursoBase } from "../recurso-base";

@Injectable()
export class RecursoBuscarProduto extends RecursoBase<Produto> {

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private buscar: BuscarProdutoService
    ) {
      super()
    }

    public executar(produtoId: number): void {
        this.spinner.show();
        this.buscar.executar(produtoId).subscribe(resposta => {
          this.estaConcluido.emit(resposta)
          this.spinner.hide();
        }, algoErrado => {
          this.toastr.error('Não foi possível carreagar o produto', 'Puxa vida :(', { progressBar: true });
        }).add(() => {
          this.spinner.hide();
        });
    }
}