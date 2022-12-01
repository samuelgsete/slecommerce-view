import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Endereco } from "src/app/model/endereco.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class ListarEnderecosService {

    public readonly urlBase: string = environment.mainUrl.concat('/cliente')

    public constructor(private readonly http: HttpClient) {}

    public executar(clienteId: number): Observable<Endereco[]> {
        return this.http.get<Endereco[]>(this.urlBase.concat(`/${clienteId}/enderecos`));
    }
}