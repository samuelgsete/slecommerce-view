import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CartaoCredito } from 'src/app/model/cartao-credito.entity';
import { RecursoListarCartoes } from 'src/app/resource/recurso-listar-cartoes';
import { RecursoRemoverCartao } from 'src/app/resource/recurso-remover-cartao';
import { bandeiras } from 'src/app/utils/bandeiras-cartao';
import { AdicionarCartaoCreditoComponent } from '../adicionar-cartao-credito/adicionar-cartao-credito.component';

@Component({
  selector: 'app-ver-cartoes-credito',
  templateUrl: './ver-cartoes-credito.component.html',
  styleUrls: ['./ver-cartoes-credito.component.css']
})
export class VerCartoesCreditoComponent implements OnInit {

  public clienteId: number = 1;
  public cartoes: CartaoCredito[] = [];
  public bandeiras = bandeiras;
  
  public constructor(
    private readonly modal: MatDialog,
    private readonly listar: RecursoListarCartoes,
    protected readonly remover: RecursoRemoverCartao
  ) {}

  public abrirModalAdicionarCartao(): void {
    const dialogRef = this.modal.open(AdicionarCartaoCreditoComponent);
    dialogRef.afterClosed().subscribe(resulst => {
      this.listar.executar(this.clienteId);
    });
  }

  public mostrarBandeiraCartao(nome: string): string | undefined {
    return this.bandeiras.find(bandeira => bandeira.nome === nome)?.urlImg;
  }

  ngOnInit(): void {
    this.listar.executar(this.clienteId);
    this.listar.ok().subscribe(cartoesCadastrados => {
      this.cartoes = cartoesCadastrados;
    });
    this.remover.ok().subscribe(cartaoRemovido => {
      this.listar.executar(this.clienteId);
    });
  }
}