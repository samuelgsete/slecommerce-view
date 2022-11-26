import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CartaoCredito } from "src/app/model/cartao-credito.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class ListarCartoesCredito {

    private readonly urlBase: string = environment.mainUrl.concat("/cartao-credito");

    public constructor(private readonly http: HttpClient) {}

    public executar(clienteId: number): Observable<CartaoCredito[]> {
        return this.http.get<CartaoCredito[]>(this.urlBase.concat(`/${clienteId}/listar`));
    }
}