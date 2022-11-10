import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Produto } from "src/app/model/produto.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class AtualizarProdutoService {
    
    private urlBase: string = environment.mainUrl.concat('/produto');

    public constructor(private readonly http: HttpClient) {}

    public executar(produtoId: number, produtoAtualizado: Produto): Observable<Produto> {
        return this.http.put<Produto>(this.urlBase.concat(`/${produtoId}`), produtoAtualizado);
    }
}