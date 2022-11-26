import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import Swal from "sweetalert2";

import { CartaoCredito } from "src/app/model/cartao-credito.entity";
import { RemoverCartao } from "../usecases/cartao-credito/remover-cartao.service";

@Injectable()
export class RecursoRemoverCartao {

    private finalizando: EventEmitter<CartaoCredito> = new EventEmitter<CartaoCredito>();

    public constructor(private readonly toastr: ToastrService, private readonly remover: RemoverCartao) {}

    public ok(): EventEmitter<CartaoCredito> {
        return this.finalizando;
    }
   
    public executar(id: number): void {
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
              this.toastr.success('Removido com sucesso', 'Tudo Ok!', { progressBar: true });
              this.finalizando.emit(resposta);
            })
          }
        });
    }
}