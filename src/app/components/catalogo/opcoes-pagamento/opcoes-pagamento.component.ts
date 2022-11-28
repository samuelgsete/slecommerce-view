import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Produto } from 'src/app/model/produto.entity';
import { RecursoBuscarProduto } from 'src/app/resource/produto/recurso-buscar-produto';

@Component({
  selector: 'app-opcoes-pagamento',
  templateUrl: './opcoes-pagamento.component.html',
  styleUrls: ['./opcoes-pagamento.component.css']
})
export class OpcoesPagamentoComponent implements OnInit {

  public produto: Produto = new Produto();

  public constructor(
    private readonly router: Router,
    protected readonly buscar: RecursoBuscarProduto
  ) {}

  public imagemPrincipal(): string | undefined {
    return this.produto.imagens.find(imagem => {return imagem.imagemPrincipal })?.url;
  }

  ngOnInit(): void {
    const produtoId = parseInt(this.router.url.split('/')[3]);
    this.buscar.executar(produtoId)
    this.buscar.ok().subscribe(produtoEncontrado => {
      this.produto = produtoEncontrado;
    })
  }
}