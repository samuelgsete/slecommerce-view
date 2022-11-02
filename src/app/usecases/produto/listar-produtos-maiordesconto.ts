import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable()
export class ListarProdutosMaiorDesconto {

    private readonly urlBase: string = environment.mainUrl.concat('/produto');

    public constructor(private readonly http: HttpClient) {}

    public executar(): Observable<any> {
        const _params = new HttpParams().set('page', 0).set('size', 20);
        return this.http.get<any>(this.urlBase.concat('/maiordesconto'), { params: _params });
    }
}