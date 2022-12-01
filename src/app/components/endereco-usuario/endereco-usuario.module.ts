import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { AdicionarEnderecoService } from 'src/app/usecases/endereco/adicionar-endereco.service';
import { ListarEnderecosService } from 'src/app/usecases/endereco/listar-enderecos.service';
import { EditarEnderecoService } from 'src/app/usecases/endereco/editar-endereco.service';
import { RemoverEnderecoService } from 'src/app/usecases/endereco/remover-endereco.service';
import { RecursoListarEnderecos } from 'src/app/resource/endereco/recurso-listar-enderecos';
import { RecursoAdicionarEndereco } from 'src/app/resource/endereco/recurso-adicionar-endereco';
import { RecursoEditarEndereco } from 'src/app/resource/endereco/recurso-editar-endereco';
import { RecursoRemoverEndereco } from 'src/app/resource/endereco/recurso-remover-endereco';
import { ListarEnderecosUsuarioComponent } from './listar-enderecos-usuario/listar-enderecos-usuario.component';
import { AdicionarEnderecoUsuarioComponent } from './adicionar-endereco-usuario/adicionar-endereco-usuario.component';
import { ConsultarCepService } from 'src/app/usecases/endereco/consultar-cep.service';
import { RecursoVerificarCep } from 'src/app/resource/endereco/recurso-verificar-cep';
import { EditarEnderecoUsuarioComponent } from './editar-endereco-usuario/editar-endereco-usuario.component';
import { TornarEnderecoPadraoService } from 'src/app/usecases/endereco/tornar-endereco-padrao.service';
import { RecursoTornarEnderecoPadrao } from 'src/app/resource/endereco/recurso-tornar-endereco-padrao';

@NgModule({
  declarations: [
    ListarEnderecosUsuarioComponent,
    AdicionarEnderecoUsuarioComponent,
    EditarEnderecoUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ListarEnderecosUsuarioComponent
  ],
  providers: [
    ListarEnderecosService,
    AdicionarEnderecoService,
    EditarEnderecoService,
    RemoverEnderecoService,
    ConsultarCepService,
    TornarEnderecoPadraoService,
    RecursoVerificarCep,
    RecursoListarEnderecos,
    RecursoAdicionarEndereco,
    RecursoEditarEndereco,
    RecursoRemoverEndereco,
    RecursoTornarEnderecoPadrao
  ]
})
export class EnderecoUsuarioModule {}