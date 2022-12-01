import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { CarrinhoComponent } from './carrinho.component';
import { AdicionarItemCarrinhoService } from 'src/app/usecases/carrinho/adicionar-item-carrinho.service';
import { BuscarCarrinhoService } from 'src/app/usecases/carrinho/buscar-carrinho.service';
import { RemoverItemCarrinhoService } from 'src/app/usecases/carrinho/remover-item-carrinho.service';
import { EditarQtdItemCarrinhoService } from 'src/app/usecases/carrinho/editar-qtd-item-carrinho.service';
import { RecursoAdicionarItemCarrinho } from 'src/app/resource/carrinho/recurso-adicionar-item-carrinho';
import { RecursoBuscarCarrinho } from 'src/app/resource/carrinho/recurso-buscar-carrinho';
import { RecursoRemoverItemCarrinho } from 'src/app/resource/carrinho/recurso-remover-item-carrinho';
import { RecursoEditarQtdItem } from 'src/app/resource/carrinho/recurso-editar-qtd-item';
import { RecursoSelecionarItemCarrinho } from 'src/app/resource/carrinho/recurso-selecionar-item-carrinho';
import { RecursoAdicionarUnidadeItem } from 'src/app/resource/carrinho/recurso-adicionar-unidade-item';
import { RecursoDiminuirUnidadeItem } from 'src/app/resource/carrinho/recurso-diminuir-unidade-item';

@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    CarrinhoComponent
  ],
  providers: [
    RecursoAdicionarItemCarrinho,
    AdicionarItemCarrinhoService,
    RecursoBuscarCarrinho,
    BuscarCarrinhoService,
    RecursoRemoverItemCarrinho,
    RemoverItemCarrinhoService,
    RecursoEditarQtdItem,
    EditarQtdItemCarrinhoService,
    RecursoSelecionarItemCarrinho,
    RecursoAdicionarUnidadeItem,
    RecursoDiminuirUnidadeItem,
  ]
})
export class CarrinhoModule {}