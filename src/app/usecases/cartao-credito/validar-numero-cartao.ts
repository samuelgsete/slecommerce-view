import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

export interface BandeiraCartaoCredito {
    nome: string
}

@Injectable()
export class ValidarNumeroCartao {

    private readonly urlBase: string = environment.mainUrl.concat('/cartao-credito');

    public constructor(private readonly http: HttpClient) {}

    public executar(numero: string): Observable<BandeiraCartaoCredito> {
        return this.http.get<BandeiraCartaoCredito>(this.urlBase.concat(`/${numero}/validar`));
    }
}