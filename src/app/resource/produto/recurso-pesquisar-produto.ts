import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { ListarProdutosPaginado } from "src/app/usecases/produto/listar-produtos-paginado";
import { Paginacao } from "src/app/utils/paginacao.entity";
import { RecursoBase } from "../recurso-base";

@Injectable()
export class RecursoPesquisarProduto extends RecursoBase<any> {

    public constructor(
        private readonly router: Router,
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private listarPaginado: ListarProdutosPaginado
    ) { super() }

    public executar(palavraChave: string): void {
        this.spinner.show();
        const paginacao: Paginacao = new Paginacao();
        paginacao.palavraChave = palavraChave;
        this.listarPaginado.executar(paginacao).subscribe(resposta => {
            this.router.navigate([], { queryParams: { palavrachave: palavraChave.toLowerCase() }});
            this.estaConcluido.emit(resposta)
        }, algoErrado => {
            this.toastr.error('Não foi possível pesquisar o produto', 'Puxa vida :(', { progressBar: true });
        }).add(() => {
            this.spinner.hide();
        })
    }
}