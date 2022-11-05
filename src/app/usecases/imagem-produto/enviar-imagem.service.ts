import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment.prod"; // urls em produção

@Injectable()
export class EnviarImagem {
    
    private urlBase =  environment.uploadImgUrl.concat("/imagem")

    public constructor(private readonly http: HttpClient) {}

    public executar(imgProduto: FormData): Observable<any> {
        return this.http.post<any>(this.urlBase.concat("/upload"), imgProduto, {
            reportProgress: true,
            observe: "events",
            responseType: 'json'
        });
    }
}