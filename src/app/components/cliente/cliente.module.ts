import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { RegistrarClienteService } from 'src/app/usecases/cliente/registrar-cliente.service';
import { CriarCarrinhoService } from 'src/app/usecases/carrinho/criar-carrinho.service';

@NgModule({
  declarations: [
    RegistrarClienteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    RegistrarClienteComponent
  ],
  providers: [
    RegistrarClienteService,
    CriarCarrinhoService,
  ]
})
export class ClienteModule {}