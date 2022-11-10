import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

import { Produto } from 'src/app/model/produto.entity';
import { ListarProdutosMaiorDesconto } from 'src/app/usecases/produto/listar-produtos-maiordesconto';
import { ListarProdutosPaginado } from 'src/app/usecases/produto/listar-produtos-paginado';
import { ProdutosMaiorPreco } from 'src/app/usecases/produto/produtos-maiorpreco.service';
import { ProdutosMaisVendidosService } from 'src/app/usecases/produto/produtos-maisvendidos.service';
import { ProdutosMenorPrecoService } from 'src/app/usecases/produto/produtos-menorpreco.service';
import { Paginacao } from 'src/app/utils/paginacao.entity';
import { AtualizarEstoqueComponent } from '../atualizar-estoque/atualizar-estoque.component';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  public produtos: Produto[] = [];
  public contador: number = 0;
  public pesquisar: FormControl = new FormControl();
  public paginacao: Paginacao = new Paginacao();
  public carregamento: boolean = false;

  public constructor(
    private readonly router: Router,
    private readonly modal: MatDialog,
    private spinner: NgxSpinnerService,
    private readonly maisVendidos: ProdutosMaisVendidosService,
    private readonly maisBaratos: ProdutosMenorPrecoService,
    private readonly maisCaros: ProdutosMaiorPreco,
    private readonly listarProdutosPaginado: ListarProdutosPaginado,
    private readonly listarProdutosMaiorDesconto: ListarProdutosMaiorDesconto
  ) {}

  public listarPaginado(paginacao: Paginacao) {
    this.carregamento = true;
    this.spinner.show();
    this.listarProdutosPaginado.executar(paginacao).subscribe(response => {
      this.produtos = response.content;
      console.log(this.produtos);
      this.paginacao.primeiraPagina = response.first;
      this.paginacao.ultimaPagina = response.last;
      this.paginacao.totalElementos = response.totalElements;
      this.spinner.hide();
      this.carregamento = false;
    });
  }

  public irParaCadastro() {
    this.router.navigateByUrl('/produto/criar');
  }

  public verProduto(produtoId: number): void {
    this.router.navigateByUrl(`/produto/${produtoId}/ver`);
  }

  public irParaEditarProduto(produtoId: number): void {
    this.router.navigateByUrl(`/produto/${produtoId}/editar`);
  }

  public produtosMaivendidos() {
    this.spinner.show();
    this.maisVendidos.executar().subscribe(response => {
      this.produtos = response.content;
      this.spinner.hide();
    })
  }

  public produtosMaisCaros() {
    this.spinner.show();
    this.maisCaros.executar().subscribe(response => {
      this.produtos = response.content;
      this.spinner.hide();
    })
  }

  public produtosMaisBaratos() {
    this.spinner.show();
    this.maisBaratos.executar().subscribe(response => {
      this.produtos = response.content;
      this.spinner.hide();
    })
  }

  public produtosMaiorDesconto() {
    this.spinner.show();
    this.listarProdutosMaiorDesconto.executar().subscribe(response => {
      this.produtos = response.content;
      this.spinner.hide();
    })
  }

  public abrirModalAtualizarEstoque(produto: Produto): void {
    const dialogRef = this.modal.open(AtualizarEstoqueComponent, {
      width: '250px',
      data: { produto: produto }
    })

    dialogRef.afterClosed().subscribe(resulst => {
      this.listarPaginado(new Paginacao());
    });
  }

  ngOnInit(): void {
    this.listarPaginado(this.paginacao);
    this.pesquisar.valueChanges.pipe(debounceTime(700)).subscribe(palavraChave => {
      this.listarPaginado(palavraChave);
    });
  }
}