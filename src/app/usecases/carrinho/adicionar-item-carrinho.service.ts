import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Carrinho } from "src/app/model/carrinho.entity";
import { ItemCarrinho } from "src/app/model/ItemCarrinho";
import { environment } from "src/environments/environment";

@Injectable()
export class AdicionarItemCarrinhoService {

    public urlBase: string = environment.mainUrl.concat('/carrinho');

    public constructor(private readonly http: HttpClient) {}

    public executar(carrinhoId: number, novoItem: ItemCarrinho): Observable<Carrinho> {
        return this.http.put<Carrinho>(this.urlBase.concat(`/${carrinhoId}/adicionar`), novoItem);
    }
}