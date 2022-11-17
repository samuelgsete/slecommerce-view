import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Carrinho } from "src/app/model/carrinho.entity";
import { ItemCarrinho } from "src/app/model/ItemCarrinho";
import { environment } from "src/environments/environment";

@Injectable()
export class EditarQtdItemCarrinhoService {
    public urlBase: string = environment.mainUrl.concat('/carrinho');

    public constructor(private readonly http: HttpClient) {}

    public executar(carrinhoId: number, itemAdicionado: ItemCarrinho): Observable<Carrinho> {
        return this.http.patch<Carrinho>(this.urlBase.concat(`/${carrinhoId}/editarquantidade`), itemAdicionado);
    }
}