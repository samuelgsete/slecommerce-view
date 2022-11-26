import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { CartaoCredito } from "../model/cartao-credito.entity";
import { AdicionarCartao } from "../usecases/cartao-credito/adicionar-cartao.service";

@Injectable()
export class RecursoAdicionarCartao {
    
    private finalizando: EventEmitter<CartaoCredito[]> = new EventEmitter<CartaoCredito[]>();

    public constructor(
        private readonly toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private readonly adicionar: AdicionarCartao
    ) {}

    public ok(): EventEmitter<CartaoCredito[]> {
        return this.finalizando;
    }

    public executar(clienteId: number, cartao: any): void {
        this.spinner.show();
        const novoCartao = new CartaoCredito({
          id: cartao.id,
          numero: cartao.numero,
          titular: cartao.titular,
          validade: cartao.validade,
          bandeira: cartao.bandeira,
          cvv: cartao.cvv
        });
        this.adicionar.executar(clienteId, novoCartao).subscribe(resposta => {
          this.toastr.success('Adicionado com sucesso :)', 'Tudo Ok!', { progressBar: true });
          this.finalizando.emit(resposta);
        }, algoErrado => {
          console.log(algoErrado);
          this.toastr.error('Algo deu errado :(', 'Há não!', { progressBar: true });
        }).add(() => {
          this.spinner.hide();
        });
    }
}