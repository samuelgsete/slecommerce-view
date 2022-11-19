import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ConsultarCepService {

    private urlBase: string = 'https://viacep.com.br/ws'

    public constructor(private readonly http: HttpClient) {}

    public executar(cep: string): Observable<any> {
        return this.http.get<any>(this.urlBase.concat(`/${cep}/json`));
    }
}