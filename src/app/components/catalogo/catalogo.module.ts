import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VerProdutoComponent } from './ver-produto/ver-produto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BuscarProdutoService } from 'src/app/usecases/produto/buscar-produto.service';

@NgModule({
  declarations: [
    VerProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    VerProdutoComponent
  ],
  providers: [
    BuscarProdutoService
  ]
})
export class CatalogoModule {}