import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Carrinho } from 'src/app/model/carrinho.entity';
import { ImagemProduto } from 'src/app/model/imagem-produto.entity';
import { RecursoAdicionarUnidadeItem } from 'src/app/resource/carrinho/recurso-adicionar-unidade-item';
import { RecursoBuscarCarrinho } from 'src/app/resource/carrinho/recurso-buscar-carrinho';
import { RecursoDiminuirUnidadeItem } from 'src/app/resource/carrinho/recurso-diminuir-unidade-item';
import { RecursoEditarQtdItem } from 'src/app/resource/carrinho/recurso-editar-qtd-item';
import { RecursoRemoverItemCarrinho } from 'src/app/resource/carrinho/recurso-remover-item-carrinho';
import { RecursoSelecionarItemCarrinho } from 'src/app/resource/carrinho/recurso-selecionar-item-carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private clienteId: number = 1;
  public carrinho: Carrinho = new Carrinho();
  public cupomDesconto: FormControl = new FormControl('', {
    validators: Validators.required
  })

  public constructor(
    protected readonly router: Router,
    protected readonly buscar: RecursoBuscarCarrinho,
    protected readonly remover: RecursoRemoverItemCarrinho,
    protected readonly editar: RecursoEditarQtdItem,
    protected readonly selecionar: RecursoSelecionarItemCarrinho,
    protected readonly adicionarUnidade: RecursoAdicionarUnidadeItem,
    protected readonly diminuirUnidade: RecursoDiminuirUnidadeItem
  ) {}

  public imagemPrincipal(imagens: ImagemProduto[]): ImagemProduto | undefined {
    return imagens.find(imagem => { return imagem.imagemPrincipal == true });
  }

  public verProduto(produtoId: number): void {
    this.router.navigateByUrl(`loja/produto/${produtoId}/ver`);
  }

  public irParaCatalogo(): void {
    this.router.navigateByUrl('loja/catalogo');
  }

  ngOnInit(): void {
    this.buscar.executar(this.clienteId);
    this.buscar.ok().subscribe(carrinho => { this.carrinho = carrinho })
    this.remover.ok().subscribe(resposta => { this.buscar.executar(this.clienteId) })
    this.editar.ok().subscribe(resposta => { this.buscar.executar(this.clienteId) })
    this.selecionar.ok().subscribe(resposta => { this.buscar.executar(this.clienteId) })
    this.adicionarUnidade.ok().subscribe(resposta => { this.buscar.executar(this.clienteId) })
    this.diminuirUnidade.ok().subscribe(resposta => { this.buscar.executar(this.clienteId) })
  }
}