import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { ListarProdutosPaginado } from "src/app/usecases/produto/listar-produtos-paginado";
import { Paginacao } from "src/app/utils/paginacao.entity";
import { RecursoBase } from "../recurso-base";

@Injectable()
export class RecursoListarProdutosPaginado extends RecursoBase<any> {

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private listarPaginado: ListarProdutosPaginado
    ) { super() }

    public executar(paginacao: Paginacao): void {
        this.spinner.show();
        this.listarPaginado.executar(paginacao).subscribe(resposta => {
            this.estaConcluido.emit(resposta)
        }, algoErrado => {
            this.toastr.error('Não foi possível listar os produtos', 'Puxa vida :(', { progressBar: true });
        }).add(() => {
          this.spinner.hide();
        })
    }
}