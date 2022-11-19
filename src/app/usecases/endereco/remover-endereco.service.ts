import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class RemoverEnderecoService {
    private urlBase: string = environment.mainUrl.concat('/endereco');

    public constructor(private readonly http: HttpClient) {}

    public executar(id: number): Observable<any> {
        return this.http.delete<any>(this.urlBase.concat(`/${id}`));
    }
}