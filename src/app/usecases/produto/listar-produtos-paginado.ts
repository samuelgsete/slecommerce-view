import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { Paginacao } from "src/app/utils/paginacao.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class ListarProdutosPaginado {

    private urlBase =  environment.mainUrl.concat("/produto/listarpaginado")

    public constructor(private readonly http: HttpClient) {}

    public executar(paginacao: Paginacao): Observable<any> {
        let parametros = new HttpParams()
            .set('palavraChave', paginacao.palavraChave)
            .set('page', paginacao.paginaAtual)
            .set('size', paginacao.tamanhoPagina)

        return this.http.get<any>(this.urlBase, { params: parametros });
    }
}