import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ObterQtdProdutosCarrinho {

    private readonly urlBase: string = environment.mainUrl.concat("/cliente");

    public constructor(private readonly http: HttpClient) {}

    public executar(clienteId: number): Observable<number> {
        return this.http.get<number>(this.urlBase.concat(`/${clienteId}/carrinho/quantidade`));
    }
}