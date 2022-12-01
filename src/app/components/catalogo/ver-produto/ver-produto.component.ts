import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ImagemProduto } from 'src/app/model/imagem-produto.entity';
import { Produto } from 'src/app/model/produto.entity';
import { RecursoAdicionarItemCarrinho } from 'src/app/resource/carrinho/recurso-adicionar-item-carrinho';
import { RecursoBuscarProduto } from 'src/app/resource/produto/recurso-buscar-produto';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {

  public carrinhoId: number = 1;
  public produto: Produto = new Produto();
  public carregamento: boolean = false;
  public quantidadeItem: FormControl = new FormControl(1, {
    validators: Validators.required
  })

  public constructor(
    private readonly router: Router,
    private readonly buscar: RecursoBuscarProduto,
    protected readonly adicionar: RecursoAdicionarItemCarrinho
  ) {}

  public ordenarImg(imgA: ImagemProduto, imgB: ImagemProduto) {
    if(imgA.imagemPrincipal)
      return -1;
    return 1;
  }

  public irParaOpcoesPagamento(id: number): void {
    this.router.navigateByUrl(`/loja/produto/${id}/opcoes-pagamento`);
  }

  ngOnInit(): void {
    const produtoId = parseInt(this.router.url.split('/')[3]);
    this.buscar.executar(produtoId);
    this.buscar.ok().subscribe(resposta => { this.produto = resposta });
  }
}