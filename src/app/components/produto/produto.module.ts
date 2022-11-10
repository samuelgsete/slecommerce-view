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
import { ListarProdutosMaiorDesconto } from 'src/app/usecases/produto/listar-produtos-maiordesconto';
import { AtualizarEstoqueComponent } from './atualizar-estoque/atualizar-estoque.component';
import { AtualizarEstoqueService } from 'src/app/usecases/produto/atualizar-estoque.service';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { AtualizarProdutoService } from 'src/app/usecases/produto/atualizar-produto.service';
import { DeletarEspecificacaoProdutoService } from 'src/app/usecases/especificacao/deletar-especificacao-produto.service';
import { EditarEspecificacaoComponent } from './editar-especificacao/editar-especificacao.component';
import { PrecificacaoProdutoComponent } from './precificacao-produto/precificacao-produto.component';

@NgModule({
  declarations: [  
    ListarProdutosComponent,
    AtualizarEstoqueComponent,
    CriarProdutoComponent,
    AdicionarEspecificacaoComponent,
    EditarProdutoComponent,
    EditarEspecificacaoComponent,
    PrecificacaoProdutoComponent
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
    AdicionarEspecificacaoComponent,
    AtualizarEstoqueComponent,
    EditarProdutoComponent,
    EditarEspecificacaoComponent,
    PrecificacaoProdutoComponent
  ],
  providers: [
    ListarProdutosService,
    CriarProdutoService,
    AtualizarEstoqueService,
    ProdutosMaisVendidosService,
    ProdutosMaiorPreco,
    ProdutosMenorPrecoService,
    ListarProdutosMaiorDesconto,
    ListarProdutosPaginado,
    AtualizarProdutoService,
    DeletarEspecificacaoProdutoService,
  ]
})
export class ProdutoModule {}