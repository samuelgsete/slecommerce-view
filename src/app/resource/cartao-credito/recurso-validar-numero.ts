import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { ValidarNumeroCartao } from "src/app/usecases/cartao-credito/validar-numero-cartao";

export interface BandeiraCartaoCredito {
    nome: string
}

@Injectable()
export class RecursoValidarNumero {

    private finalizando: EventEmitter<BandeiraCartaoCredito> = new EventEmitter<BandeiraCartaoCredito>();

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly validar: ValidarNumeroCartao
    ) {}

    public ok(): EventEmitter<BandeiraCartaoCredito> {
        return this.finalizando;
    }

    public executar(numero: string): void {
        this.spinner.show();
        this.validar.executar(numero).subscribe(resposta => {
            console.log(resposta);
            this.finalizando.emit(resposta);
        },
        algoErrado => {
            this.toastr.error('Algo deu errado :(', 'Há não!', { progressBar: true });
        }).add(() => {
          this.spinner.hide();
        });
      }
}