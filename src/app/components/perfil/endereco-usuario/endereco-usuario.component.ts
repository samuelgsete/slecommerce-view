import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2'

import { Endereco } from 'src/app/model/endereco.entity';
import { ListarEnderecosService } from 'src/app/usecases/endereco/listar-enderecos.service';
import { RemoverEnderecoService } from 'src/app/usecases/endereco/remover-endereco.service';
import { TornarEnderecoPadraoService } from 'src/app/usecases/endereco/tornar-endereco-padrao.service';
import { AdicionarEnderecoComponent } from '../adicionar-endereco/adicionar-endereco.component';
import { EditarEnderecoComponent } from '../editar-endereco/editar-endereco.component';

@Component({
  selector: 'app-endereco-usuario',
  templateUrl: './endereco-usuario.component.html',
  styleUrls: ['./endereco-usuario.component.css']
})
export class EnderecoUsuarioComponent implements OnInit {

  public enderecos: Endereco[] = [];
  public clienteId = 0;

  public constructor(
    private readonly modal: MatDialog,
    private spinner: NgxSpinnerService,
    private readonly listar: ListarEnderecosService,
    private readonly tornarPadrao: TornarEnderecoPadraoService,
    private readonly remover: RemoverEnderecoService
  ) {}

  public carregarEnderecos(clienteId: number): void {
    this.spinner.show();
    this.listar.executar(clienteId).subscribe(response => {
      this.enderecos =  response;
      this.enderecos.sort(this.ordenarEnderecos);
    }).add(() => {
      this.spinner.hide();
    })
  }

  public abrirModalAdicionarEndereco(): void {
    const dialogRef = this.modal.open(AdicionarEnderecoComponent);

    dialogRef.afterClosed().subscribe(resulst => {
      this.carregarEnderecos(this.clienteId);
    });
  }

  public abrirModalEditarEndereco(endereco: Endereco): void {
    const dialogRef = this.modal.open(EditarEnderecoComponent , {
      data: endereco
    });

    dialogRef.afterClosed().subscribe(resulst => {
      this.carregarEnderecos(this.clienteId);
    });
  }

  public tornarEnderecoPadrao(enderecoId: number, enderecoPadrao: boolean): void {
    this.tornarPadrao.executar(this.clienteId, enderecoId, enderecoPadrao).subscribe(response => {
      this.carregarEnderecos(this.clienteId);
    })
  }

  public removerEndereco(id: number): void {
    Swal.fire({
      title: 'Tem certeza que deseja remover?',
      text: 'Você não poderá desfazer essa operação',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if(result.isConfirmed) {
        this.remover.executar(id).subscribe(response => {
          this.carregarEnderecos(this.clienteId);
        })
      }
    });
  }

  public ordenarEnderecos(enderecoA: Endereco, enderecoB: Endereco) {
    if(enderecoA.enderecoPadrao)
      return -1;
    return 1;
  }

  ngOnInit(): void {
    this.clienteId = 1;
    this.carregarEnderecos(this.clienteId);
  }
}