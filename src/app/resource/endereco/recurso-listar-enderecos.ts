import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Endereco } from "src/app/model/endereco.entity";
import { RecursoBase } from "../recurso-base";
import { ListarEnderecosService } from '../../usecases/endereco/listar-enderecos.service'

@Injectable()
export class RecursoListarEnderecos extends RecursoBase<Endereco[]> {
    
    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly listar: ListarEnderecosService
    ) {
        super();
    }

    public executar(clienteId: number): void {
        this.spinner.show();
        this.listar.executar(clienteId).subscribe(resposta => {
            this.estaConcluido.emit(resposta);
            return this.estaConcluido;
        }, algoErrado => {
            this.toastr.error('Não foi possivel listar os endereços', 'Poooxa!', { progressBar: true })
        }).add(() => {
          this.spinner.hide();
        })
    }
}