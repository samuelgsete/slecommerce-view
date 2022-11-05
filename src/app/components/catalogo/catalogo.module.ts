import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VerProdutoComponent } from './ver-produto/ver-produto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BuscarProdutoService } from 'src/app/usecases/produto/buscar-produto.service';
import { VerImagensComponent } from './ver-produto/ver-imagens/ver-imagens.component';
import { CalcularFreteComponent } from './ver-produto/calcular-frete/calcular-frete.component';

@NgModule({
  declarations: [
    VerProdutoComponent,
    VerImagensComponent,
    CalcularFreteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    VerProdutoComponent,
    VerImagensComponent,
    CalcularFreteComponent
  ],
  providers: [
    BuscarProdutoService
  ]
})
export class CatalogoModule {}