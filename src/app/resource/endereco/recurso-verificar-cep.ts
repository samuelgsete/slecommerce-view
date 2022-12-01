import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { ConsultarCepService } from "src/app/usecases/endereco/consultar-cep.service";
import { RecursoBase } from "../recurso-base";

@Injectable()
export class RecursoVerificarCep extends RecursoBase<any> {
    
    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly consultar: ConsultarCepService
    ) { super() }

    public executar(cep: string, formulario: any): void {
        this.spinner.show();
        this.consultar.executar(cep).subscribe(resposta => { 
            formulario.patchValue({
              id: null,
              rua: resposta.logradouro,
              bairro: resposta.bairro,
              municipio: resposta.localidade,
              uf: resposta.uf
            });
            this.estaConcluido.emit(formulario);
        }, algoErrado => {
            this.toastr.error('Não foi possivel verificar o cep informado', 'Poooxa!', { progressBar: true })
        }).add(() => {
            this.spinner.hide();
        })
    }
}