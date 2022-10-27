import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ListarProdutosService } from 'src/app/usecases/produto/listar-produtos.service';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { CriarProdutoService } from 'src/app/usecases/produto/criar-produto.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImagemProdutoModule } from '../imagem-produto/imagem-produto.module';

@NgModule({
  declarations: [  
    ListarProdutosComponent,
    CriarProdutoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ImagemProdutoModule
  ],
  exports: [
    ListarProdutosComponent,
    CriarProdutoComponent
  ],
  providers: [
    ListarProdutosService,
    CriarProdutoService
  ]
})
export class ProdutoModule {}