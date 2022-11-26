import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Produto } from "src/app/model/produto.entity";
import { ProdutosFavoritos } from "src/app/model/produtos-favoritos.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class FavoritarProduto {

    private urlBase: string = environment.mainUrl.concat("/cliente")

    public constructor(private readonly http: HttpClient) {}

    public executar(clienteId: number, produto: Produto): Observable<ProdutosFavoritos> {
        return this.http.patch<ProdutosFavoritos>(this.urlBase.concat(`/${clienteId}/produtos/favoritos`), produto);
    }
}