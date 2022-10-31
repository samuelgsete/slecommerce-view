import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Produto } from 'src/app/model/produto.entity';
import { ListarProdutosPaginado } from 'src/app/usecases/produto/listar-produtos-paginado';
import { ListarProdutosService } from 'src/app/usecases/produto/listar-produtos.service';
import { ProdutosMaiorPreco } from 'src/app/usecases/produto/produtos-maiorpreco.service';
import { ProdutosMaisVendidosService } from 'src/app/usecases/produto/produtos-maisvendidos.service';
import { ProdutosMenorPrecoService } from 'src/app/usecases/produto/produtos-menorpreco.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  public produtos: Produto[] = [];
  public contador: number = 0;
  public pesquisar: FormControl = new FormControl();

  public constructor(
    private readonly router: Router,
    private readonly listar: ListarProdutosService,
    private readonly maisVendidos: ProdutosMaisVendidosService,
    private readonly maisBaratos: ProdutosMenorPrecoService,
    private readonly maisCaros: ProdutosMaiorPreco,
    private readonly listarProdutosPaginado: ListarProdutosPaginado
  ) {}

  public listarPaginado(palavraChave: string) {
    this.listarProdutosPaginado.executar(palavraChave).subscribe(response => {
      this.produtos = response.content;
    });
  }

  public irParaCadastro() {
    this.router.navigateByUrl('/produto/criar');
  }

  public produtosMaivendidos() {
    this.maisVendidos.executar().subscribe(response => {
      console.log(response)
      this.produtos = response.content;
    })
  }

  public produtosMaisCaros() {
    this.maisCaros.executar().subscribe(response => {
      this.produtos = response.content;
    })
  }

  public produtosMaisBaratos() {
    this.maisBaratos.executar().subscribe(response => {
      this.produtos = response.content;
    })
  }

  ngOnInit(): void {
    this.listarPaginado('');
    this.pesquisar.valueChanges.pipe(debounceTime(700)).subscribe(palavraChave => {
      this.listarPaginado(palavraChave);
    });
  }
}