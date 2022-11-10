import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EnviarImagemComponent } from './enviar-imagem/enviar-imagem.component';
import { EnviarImagem } from 'src/app/usecases/imagem-produto/enviar-imagem.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RemoverImagemService } from 'src/app/usecases/imagem-produto/remover-imagem.service';
import { DeletarImagemProdutoService } from 'src/app/usecases/imagem-produto/deletar-imagem-produto.service';
import { EditarImagemComponent } from './editar-imagem/editar-imagem.component';

@NgModule({
  declarations: [
    EnviarImagemComponent,
    EditarImagemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    EnviarImagemComponent,
    EditarImagemComponent
  ],
  providers: [
    EnviarImagem,
    RemoverImagemService, // remove a imagem do servidor de uploads
    DeletarImagemProdutoService // Deleta a imagem da entidade produto 
  ]
})
export class ImagemProdutoModule {}