import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Produto } from "src/app/model/produto.entity";
import { environment } from "src/environments/environment.prod"; // urls em produção

@Injectable()
export class BuscarProdutoService {

    private urlBase: string = environment.mainUrl.concat("/produto");

    public constructor(private readonly http: HttpClient) {}

    public executar(produtoId: number): Observable<Produto> {
        return this.http.get<Produto>(this.urlBase.concat(`/${produtoId}`));
    }
}