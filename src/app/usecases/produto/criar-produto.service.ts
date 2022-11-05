import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment.prod"; // urls em produção
import { Produto } from "src/app/model/produto.entity";

@Injectable()
export class CriarProdutoService {

    private urlBase = environment.mainUrl.concat('/produto');

    public constructor(private readonly http: HttpClient) {}

    public executar(novoProduto: Produto): Observable<any> {
        let customHeaders = new HttpHeaders().set('Location', '')
        return this.http.post<any>(this.urlBase, novoProduto, { headers: customHeaders, observe: 'response' });
    }
}