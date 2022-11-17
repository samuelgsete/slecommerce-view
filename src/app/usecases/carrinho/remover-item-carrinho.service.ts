import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Carrinho } from "src/app/model/carrinho.entity";
import { ItemCarrinho } from "src/app/model/ItemCarrinho";
import { environment } from "src/environments/environment";

@Injectable()
export class RemoverItemCarrinhoService {

    public urlBase: string = environment.mainUrl.concat('/carrinho');

    public constructor(private readonly http: HttpClient) {}

    public executar(carrinhoId: number, itemRemovido: ItemCarrinho): Observable<any> {
        return this.http.delete<any>(this.urlBase.concat(`/${carrinhoId}/removeritem`), { body: itemRemovido });
    }
}