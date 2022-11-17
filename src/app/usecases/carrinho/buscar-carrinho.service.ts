import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Carrinho } from "src/app/model/carrinho.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class BuscarCarrinhoService {

    public urlBase: string = environment.mainUrl.concat('/cliente');

    public constructor(private readonly http: HttpClient) {}

    public executar(clienteId: number): Observable<Carrinho> {
        return this.http.get<Carrinho>(this.urlBase.concat(`/${clienteId}/carrinho`));
    }
}