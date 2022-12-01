import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Endereco } from "src/app/model/endereco.entity";
import { RecursoBase } from "../recurso-base";
import { EditarEnderecoService } from "src/app/usecases/endereco/editar-endereco.service";

@Injectable()
export class RecursoEditarEndereco  extends RecursoBase<Endereco> {

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly editar: EditarEnderecoService
    ) {
        super()
    }

    public executar(formulario: any, cepConsultado: number): void {
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
        this.editar.executar(endereco.id, endereco).subscribe(resposta => {
            this.estaConcluido.emit(resposta)
            this.toastr.success('O endereço foi atualizado', 'Tudo ok!', { progressBar: true })
        }, algoErrado => {
            this.toastr.error('Não foi possivel atualizar o endereço', 'Poooxa!', { progressBar: true })
        }).add(() => {
          this.spinner.hide();
        })
    }
}