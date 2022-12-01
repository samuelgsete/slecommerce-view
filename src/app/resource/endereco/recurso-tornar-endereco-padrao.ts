import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { RecursoBase } from "../recurso-base";
import { TornarEnderecoPadraoService } from "src/app/usecases/endereco/tornar-endereco-padrao.service";

@Injectable()
export class RecursoTornarEnderecoPadrao extends RecursoBase<any> {

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly tornarPadrao: TornarEnderecoPadraoService
    ) { super() }

    public executar(clienteId: number, enderecoId: number): void {
        this.spinner.show()
        this.tornarPadrao.executar(clienteId, enderecoId).subscribe(resposta => {
            this.estaConcluido.emit(resposta)
            this.toastr.success('Endereço atualizado com sucesso', 'Tudo certo!', { progressBar: true })
        }, algoErrado => {
            this.toastr.error('Não foi possivel processar a solicitação', 'Poooxa!', { progressBar: true })
        }).add(() => {
            this.spinner.hide()
        })
    }
}