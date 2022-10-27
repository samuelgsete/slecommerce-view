import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable()
export class RemoverImagemService {
    
    private urlBase =  environment.uploadImgUrl.concat("/imagem")

    public constructor(private readonly http: HttpClient) {}

    public executar(nomeImg: string): Observable<any> {
        return this.http.delete<any>(this.urlBase.concat(`/upload/${nomeImg}`));
    }
}