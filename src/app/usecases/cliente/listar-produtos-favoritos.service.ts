import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable()
export class ListarProdutosFavoritos {
    private urlBase: string = environment.mainUrl.concat("/cliente")

    public constructor(private readonly http: HttpClient) {}

    public executar(clienteId: number): Observable<any[]> {
        return this.http.get<any[]>(this.urlBase.concat(`/${clienteId}/produtos/favoritos`));
    }
}