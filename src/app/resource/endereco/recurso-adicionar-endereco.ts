import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Endereco } from "src/app/model/endereco.entity";
import { RecursoBase } from "../recurso-base";
import { AdicionarEnderecoService } from "src/app/usecases/endereco/adicionar-endereco.service";

@Injectable()
export class RecursoAdicionarEndereco  extends RecursoBase<Endereco[]> {

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly adicionar: AdicionarEnderecoService
    ) {
        super()
    }

    public executar(clienteId: number, formulario: any, cepConsultado: string): void {
        this.spinner.show();
        const endereco = new Endereco({
          id: formulario.id,
          rua: formulario.rua,
          numero: formulario.numero,
          cep: cepConsultado,
          bairro: formulario.bairro,
          municipio: formulario.municipio,
          uf: formulario.uf,
          destinatario: formulario.destinatario,
          telefone: formulario.telefone,
          enderecoPadrao: formulario.enderecoPadrao
        })
        this.adicionar.executar(clienteId, endereco).subscribe(resposta => {
            this.estaConcluido.emit(resposta)
        }, algoErrado => {
            this.toastr.error('Não foi possivel adicionar o endereço', 'Poooxa!', { progressBar: true })
        }).add(() => {
          this.spinner.hide();
        })
    }
}