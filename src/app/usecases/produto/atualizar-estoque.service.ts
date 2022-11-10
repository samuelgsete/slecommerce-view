import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment"; // urls em produção

@Injectable()
export class AtualizarEstoqueService {

    public urlBase: string = environment.mainUrl.concat('/produto');

    public constructor(private readonly http: HttpClient) {}

    public executar(produtoId: number, estoqueAtualizado: number): Observable<any> {
        return this.http.patch<any>(this.urlBase.concat(`/${produtoId}/atualizarestoque?estoqueAtualizado=${estoqueAtualizado}`), {});
    }
}