import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { CarrinhoComponent } from './carrinho.component';
import { AdicionarItemCarrinhoService } from 'src/app/usecases/carrinho/adicionar-item-carrinho.service';
import { BuscarCarrinhoService } from 'src/app/usecases/carrinho/buscar-carrinho.service';
import { RemoverItemCarrinhoService } from 'src/app/usecases/carrinho/remover-item-carrinho.service';
import { EditarQtdItemCarrinhoService } from 'src/app/usecases/carrinho/editar-qtd-item-carrinho.service';

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
    AdicionarItemCarrinhoService,
    BuscarCarrinhoService,
    RemoverItemCarrinhoService,
    EditarQtdItemCarrinhoService
  ]
})
export class CarrinhoModule {}