import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable()
export class DeletarImagemProdutoService {

    public urlBase: string = environment.mainUrl.concat('/imagem');

    public constructor(private readonly http: HttpClient) {}

    public executar(imagemId: number): Observable<any> {
        return this.http.delete<any>(this.urlBase.concat(`/${imagemId}`));
    }
}