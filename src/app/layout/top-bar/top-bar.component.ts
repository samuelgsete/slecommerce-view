import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Produto } from 'src/app/model/produto.entity';
import { RecursoObterQtdProdutosCarrinho } from 'src/app/resource/carrinho/recurso-obter-qtd-produtos-carrinho';
import { RecursoPesquisarProduto } from 'src/app/resource/produto/recurso-pesquisar-produto';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public consultar: FormControl = new FormControl('');
  public produtos: Produto[] = [];
  public usuario: string = 'Samuel';
  public clienteId: number = 1;
  public quantidade: number = 0;
  public rotas: any[] = [
    { icone: 'shope', destino: '/loja/catalogo' },
    { icone: 'shopping_basket', destino: 'loja/carrinho' }
  ];

  public constructor(
    private readonly router: Router, 
    private pesquisar: RecursoPesquisarProduto,
    private obterQtdProdutos: RecursoObterQtdProdutosCarrinho
  ) {}

  public navegarPara(destino: string): void {
    this.router.navigateByUrl(destino);
  }

  public displayFn(produto: Produto): string {
    return produto.nome;
  }

  public itemSelecionado(produto: Produto): void {
    this.router.navigate(['/loja/catalogo'], { queryParams: { palavrachave: produto.nome.toLowerCase() }});
  }

  ngOnInit(): void {
    this.consultar.valueChanges.pipe(debounceTime(700)).subscribe(palavraChave => {
      this.pesquisar.executar(palavraChave)
    })
    this.pesquisar.ok().subscribe(resposta => { this.produtos = resposta.content })
    this.obterQtdProdutos.executar(this.clienteId);
    this.obterQtdProdutos.ok().subscribe(resposta => {
      this.quantidade = resposta;
    })
  }
}