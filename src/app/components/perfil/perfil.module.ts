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

@NgModule({
  declarations: [
    EnderecoUsuarioComponent,
    AdicionarEnderecoComponent,
    EditarEnderecoComponent,
    PerfilComponent,
    EditarPerfilComponent
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
    EditarClienteService
  ]
})
export class PerfilModule {}