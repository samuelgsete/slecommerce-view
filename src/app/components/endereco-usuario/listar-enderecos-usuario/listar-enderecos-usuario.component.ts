import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Endereco } from 'src/app/model/endereco.entity';
import { RecursoListarEnderecos } from 'src/app/resource/endereco/recurso-listar-enderecos';
import { RecursoRemoverEndereco } from 'src/app/resource/endereco/recurso-remover-endereco';
import { RecursoTornarEnderecoPadrao } from 'src/app/resource/endereco/recurso-tornar-endereco-padrao';
import { AdicionarEnderecoUsuarioComponent } from '../adicionar-endereco-usuario/adicionar-endereco-usuario.component';
import { EditarEnderecoUsuarioComponent } from '../editar-endereco-usuario/editar-endereco-usuario.component';

@Component({
  selector: 'app-listar-enderecos-usuario',
  templateUrl: './listar-enderecos-usuario.component.html',
  styleUrls: ['./listar-enderecos-usuario.component.css']
})
export class ListarEnderecosUsuarioComponent implements OnInit {

  public enderecos: Endereco[] = [];
  public clienteId: number = 1;

  public constructor(
    protected readonly modal: MatDialog,
    protected readonly listar: RecursoListarEnderecos,
    protected readonly remover: RecursoRemoverEndereco,
    protected readonly tornarPadrao: RecursoTornarEnderecoPadrao
  ) {}

  public abrirModalAdicionarEndereco(): void {
    const dialogRef = this.modal.open(AdicionarEnderecoUsuarioComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.listar.executar(this.clienteId);
    });
  }

  public abrirModalEditarEndereco(endereco: Endereco): void {
    const dialogRef = this.modal.open(EditarEnderecoUsuarioComponent, {
      data: endereco
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listar.executar(this.clienteId);
    });
  }

  ngOnInit(): void {
    this.listar.executar(this.clienteId);
    this.listar.ok().subscribe(resposta => { this.enderecos = resposta })
    this.remover.ok().subscribe(resposta => {  this.listar.executar(this.clienteId) })
    this.tornarPadrao.ok().subscribe(resposta => {  this.listar.executar(this.clienteId) })
  }
}