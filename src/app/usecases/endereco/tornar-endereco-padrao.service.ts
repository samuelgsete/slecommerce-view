import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endereco } from "src/app/model/endereco.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class TornarEnderecoPadraoService {
    private urlBase: string = environment.mainUrl.concat('/endereco');

    public constructor(private readonly http: HttpClient) {}

    public executar(clienteId: number, enderecoId: number, enderecoPadrao: boolean): Observable<Endereco> {
        return this.http.patch<Endereco>(this.urlBase.concat(`/${enderecoId}?clienteId=${clienteId}&enderecoPadrao=${enderecoPadrao}`), {});
    }
}