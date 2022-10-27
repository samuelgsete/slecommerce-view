import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnviarImagemComponent } from './enviar-imagem/enviar-imagem.component';
import { EnviarImagem } from 'src/app/usecases/imagem-produto/enviar-imagem.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RemoverImagemService } from 'src/app/usecases/imagem-produto/remover-imagem.service';

@NgModule({
  declarations: [
    EnviarImagemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EnviarImagemComponent
  ],
  providers: [
    EnviarImagem,
    RemoverImagemService
  ]
})
export class ImagemProdutoModule {}