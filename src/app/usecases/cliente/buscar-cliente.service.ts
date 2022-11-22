import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { Cliente } from "src/app/model/cliente.entity";

@Injectable()
export class BuscarClienteService {

    public urlBase: string = environment.mainUrl.concat('/cliente')

    public constructor(private readonly http: HttpClient) {}

    public executar(clienteId: number): Observable<Cliente> {
        return this.http.get<Cliente>(this.urlBase.concat(`/${clienteId}`));
    }
}