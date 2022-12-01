import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import Swal from "sweetalert2";

import { RecursoBase } from "../recurso-base";
import { RemoverEnderecoService } from "src/app/usecases/endereco/remover-endereco.service";

@Injectable()
export class RecursoRemoverEndereco  extends RecursoBase<any> {

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly remover: RemoverEnderecoService
    ) {
        super()
    }

    public executar(id: number): void {
        this.spinner.show();
        Swal.fire({
            title: 'Tem certeza que deseja remover?',
            text: 'Você não poderá desfazer essa operação',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if(result.isConfirmed) {
                this.remover.executar(id).subscribe(resposta => {
                    this.estaConcluido.emit(resposta);
                    this.toastr.success('Removido com sucesso', 'Tudo ok!', { progressBar: true })
                }, algoErrado => {
                    this.toastr.error('Não foi possivel remover o endereço', 'Poooxa!', { progressBar: true })
                }).add(() => {
                    this.spinner.hide();
                })
            }
        });
    }
}