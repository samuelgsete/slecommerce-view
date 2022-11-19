import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Endereco } from "src/app/model/endereco.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class EditarEnderecoService {

    public urlBase: string = environment.mainUrl.concat('/endereco')

    public constructor(private readonly http: HttpClient) {}

    public executar(enderecoId: number, enderecoAtualizado: Endereco): Observable<Endereco> {
        return this.http.put<Endereco>(this.urlBase.concat(`/${enderecoId}`), enderecoAtualizado);
    }
}