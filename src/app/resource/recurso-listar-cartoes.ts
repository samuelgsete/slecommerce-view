import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { CartaoCredito } from "../model/cartao-credito.entity";
import { ListarCartoesCredito } from "../usecases/cartao-credito/listar-cartoes.service";

@Injectable()
export class RecursoListarCartoes {

    private finalizando: EventEmitter<CartaoCredito[]> = new EventEmitter<CartaoCredito[]>();

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly listar: ListarCartoesCredito
    ) {}

    public ok(): EventEmitter<CartaoCredito[]> {
        return this.finalizando;
    }

    public executar(clienteId: number): void {
        this.spinner.show();
        this.listar.executar(clienteId).subscribe(resposta => {
            this.finalizando.emit(resposta);
        }, algoErro => {
            this.toastr.error('Algo deu errado :(', 'Puxa vida', { progressBar: true });
        }).add(() => {
            this.spinner.hide();
        });
    }
}