import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment.prod"; // urls em produção

@Injectable()
export class RemoverImagemService {
    // Deleta a imagem do servidor de upload
    private urlBase =  environment.uploadImgUrl.concat("/imagem")

    public constructor(private readonly http: HttpClient) {}

    public executar(nomeImg: string): Observable<any> {
        return this.http.delete<any>(this.urlBase.concat(`/upload/${nomeImg}`));
    }
}