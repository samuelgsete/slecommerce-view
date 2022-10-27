import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { Produto } from "src/app/model/produto.entity";

@Injectable()
export class CriarProdutoService {
    private urlBase = environment.mainUrl.concat('/produto');

    public constructor(private readonly http: HttpClient) {}

    public criar(novoProduto: Produto): Observable<any> {
        return this.http.post<any>(this.urlBase, novoProduto);
    }
}