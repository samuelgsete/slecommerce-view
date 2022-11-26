import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CartaoCredito } from "src/app/model/cartao-credito.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class AdicionarCartao {

    private readonly urlBase: string = environment.mainUrl.concat('/cartao-credito');

    public constructor(private readonly http: HttpClient) {}

    public executar(clienteId: number, novoCartao: CartaoCredito): Observable<CartaoCredito[]> {
        return this.http.post<CartaoCredito[]>(this.urlBase.concat(`/${clienteId}/adicionar`), novoCartao);
    }
}