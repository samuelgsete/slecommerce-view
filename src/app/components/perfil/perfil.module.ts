import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { PerfilComponent } from './perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { BuscarClienteService } from 'src/app/usecases/cliente/buscar-cliente.service';
import { EditarClienteService } from 'src/app/usecases/cliente/editar-cliente.service';
import { ProdutosFavoritosComponent } from './produtos-favoritos/produtos-favoritos.component';
import { ListarProdutosFavoritos } from 'src/app/usecases/cliente/listar-produtos-favoritos.service';
import { AdicionarCartaoCreditoComponent } from './adicionar-cartao-credito/adicionar-cartao-credito.component';
import { ValidarNumeroCartao } from 'src/app/usecases/cartao-credito/validar-numero-cartao';
import { VerCartoesCreditoComponent } from './ver-cartoes-credito/ver-cartoes-credito.component';
import { ListarCartoesCredito } from 'src/app/usecases/cartao-credito/listar-cartoes.service';
import { AdicionarCartao } from 'src/app/usecases/cartao-credito/adicionar-cartao.service';
import { RemoverCartao } from 'src/app/usecases/cartao-credito/remover-cartao.service';
import { RecursoListarCartoes } from 'src/app/resource/cartao-credito/recurso-listar-cartoes';
import { RecursoRemoverCartao } from 'src/app/resource/cartao-credito/recurso-remover-cartao';
import { RecursoAdicionarCartao } from 'src/app/resource/cartao-credito/recurso-adicionar-cartao';
import { RecursoValidarNumero } from 'src/app/resource/cartao-credito/recurso-validar-numero';

@NgModule({
  declarations: [
    PerfilComponent,
    EditarPerfilComponent,
    ProdutosFavoritosComponent,
    AdicionarCartaoCreditoComponent,
    VerCartoesCreditoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
    BuscarClienteService,
    EditarClienteService,
    ListarProdutosFavoritos,
    ListarCartoesCredito,
    RecursoListarCartoes,
    ValidarNumeroCartao,
    RecursoValidarNumero,
    AdicionarCartao,
    RecursoAdicionarCartao,
    RecursoRemoverCartao,
    RemoverCartao,
  ]
})
export class PerfilModule {}