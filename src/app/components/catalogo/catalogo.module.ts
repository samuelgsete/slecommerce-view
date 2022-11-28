import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VerProdutoComponent } from './ver-produto/ver-produto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BuscarProdutoService } from 'src/app/usecases/produto/buscar-produto.service';
import { VerImagensComponent } from './ver-produto/ver-imagens/ver-imagens.component';
import { CalcularFreteComponent } from './ver-produto/calcular-frete/calcular-frete.component';
import { CatalogoComponent } from './catalogo.component';
import { ListarProdutosPaginado } from 'src/app/usecases/produto/listar-produtos-paginado';
import { ListarProdutosMaiorDesconto } from 'src/app/usecases/produto/listar-produtos-maiordesconto';
import { ProdutosMaiorPreco } from 'src/app/usecases/produto/produtos-maiorpreco.service';
import { ProdutosMaisVendidosService } from 'src/app/usecases/produto/produtos-maisvendidos.service';
import { ProdutosMenorPrecoService } from 'src/app/usecases/produto/produtos-menorpreco.service';
import { AdicionarItemCarrinhoService } from 'src/app/usecases/carrinho/adicionar-item-carrinho.service';
import { OpcoesPagamentoComponent } from './opcoes-pagamento/opcoes-pagamento.component';
import { RecursoBuscarProduto } from 'src/app/resource/produto/recurso-buscar-produto';

@NgModule({
  declarations: [
    VerProdutoComponent,
    VerImagensComponent,
    CalcularFreteComponent,
    CatalogoComponent,
    OpcoesPagamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    CatalogoComponent,
    VerProdutoComponent,
    VerImagensComponent,
    CalcularFreteComponent
  ],
  providers: [
    BuscarProdutoService,
    RecursoBuscarProduto,
    ListarProdutosPaginado,
    ListarProdutosMaiorDesconto,
    ProdutosMaiorPreco,
    ProdutosMaisVendidosService,
    ProdutosMenorPrecoService,
    AdicionarItemCarrinhoService
  ]
})
export class CatalogoModule {}