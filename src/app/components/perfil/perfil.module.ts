import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@NgModule({
  declarations: [
    EnderecoUsuarioComponent,
    AdicionarEnderecoComponent,
    EditarEnderecoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    AdicionarEnderecoService,
    ListarEnderecosService,
    EditarEnderecoService,
    TornarEnderecoPadraoService,
    RemoverEnderecoService,
    ConsultarCepService
  ]
})
export class PerfilModule {}