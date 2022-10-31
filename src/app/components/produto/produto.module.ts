import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ListarProdutosService } from 'src/app/usecases/produto/listar-produtos.service';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { CriarProdutoService } from 'src/app/usecases/produto/criar-produto.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImagemProdutoModule } from '../imagem-produto/imagem-produto.module';
import { AdicionarEspecificacaoComponent } from './adicionar-especificacao/adicionar-especificacao.component';
import { ProdutosMaisVendidosService } from 'src/app/usecases/produto/produtos-maisvendidos.service';
import { ProdutosMaiorPreco } from 'src/app/usecases/produto/produtos-maiorpreco.service';
import { ProdutosMenorPrecoService } from 'src/app/usecases/produto/produtos-menorpreco.service';
import { ListarProdutosPaginado } from 'src/app/usecases/produto/listar-produtos-paginado';

@NgModule({
  declarations: [  
    ListarProdutosComponent,
    CriarProdutoComponent,
    AdicionarEspecificacaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ImagemProdutoModule
  ],
  exports: [
    ListarProdutosComponent,
    CriarProdutoComponent,
    AdicionarEspecificacaoComponent
  ],
  providers: [
    ListarProdutosService,
    CriarProdutoService,
    ProdutosMaisVendidosService,
    ProdutosMaiorPreco,
    ProdutosMenorPrecoService,
    ListarProdutosPaginado
  ]
})
export class ProdutoModule {}