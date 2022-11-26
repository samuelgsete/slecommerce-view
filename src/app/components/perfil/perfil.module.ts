import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { EnderecoUsuarioComponent } from './endereco-usuario/endereco-usuario.component';
import { AdicionarEnderecoService } from 'src/app/usecases/endereco/adicionar-endereco.service';
import { ListarEnderecosService } from 'src/app/usecases/endereco/listar-enderecos.service';
import { AdicionarEnderecoComponent } from './adicionar-endereco/adicionar-endereco.component';
import { EditarEnderecoService } from 'src/app/usecases/endereco/editar-endereco.service';
import { TornarEnderecoPadraoService } from 'src/app/usecases/endereco/tornar-endereco-padrao.service';
import { RemoverEnderecoService } from 'src/app/usecases/endereco/remover-endereco.service';
import { ConsultarCepService } from 'src/app/usecases/endereco/consultar-cep.service';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
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
import { RecursoListarCartoes } from 'src/app/resource/recurso-listar-cartoes';
import { RecursoRemoverCartao } from 'src/app/resource/recurso-remover-cartao';
import { RecursoAdicionarCartao } from 'src/app/resource/recurso-adicionar-cartao';
import { RecursoValidarNumero } from 'src/app/resource/cartao-credito/recurso-validar-numero';

@NgModule({
  declarations: [
    EnderecoUsuarioComponent,
    AdicionarEnderecoComponent,
    EditarEnderecoComponent,
    PerfilComponent,
    EditarPerfilComponent,
    ProdutosFavoritosComponent,
    AdicionarCartaoCreditoComponent,
    VerCartoesCreditoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    AdicionarEnderecoService,
    ListarEnderecosService,
    EditarEnderecoService,
    TornarEnderecoPadraoService,
    RemoverEnderecoService,
    ConsultarCepService,
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