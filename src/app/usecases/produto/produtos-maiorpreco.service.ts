import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable()
export class ProdutosMaiorPreco {
    private urlBase =  environment.mainUrl.concat("/produto")

    public constructor(private readonly http: HttpClient) {}

    public executar(): Observable<any> {
        return this.http.get<any>(this.urlBase.concat("/maiscaros"));
    }
}