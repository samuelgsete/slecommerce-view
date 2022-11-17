import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Carrinho } from "src/app/model/carrinho.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class CriarCarrinhoService {

    public urlBase: string = environment.mainUrl.concat('/carrinho');

    public constructor(private readonly http: HttpClient) {}

    public executar(novoCarrinho: Carrinho): Observable<any> {
        return this.http.post<any>(this.urlBase, novoCarrinho);
    }
}