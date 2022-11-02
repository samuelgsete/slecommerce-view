import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Produto } from "src/app/model/produto.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class AtualizarEstoqueService {

    public urlBase: string = environment.mainUrl.concat('/produto');

    public constructor(private readonly http: HttpClient) {}

    public executar(produtoId: number, estoqueAtualizado: number): Observable<any> {
        return this.http.patch<any>(this.urlBase.concat(`/${produtoId}/atualizarestoque?estoqueAtualizado=${estoqueAtualizado}`), {});
    }
}