import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

import { ImagemProduto } from 'src/app/model/imagem-produto.entity';
import { ItemCarrinho } from 'src/app/model/ItemCarrinho';
import { Produto } from 'src/app/model/produto.entity';
import { AdicionarItemCarrinhoService } from 'src/app/usecases/carrinho/adicionar-item-carrinho.service';
import { BuscarProdutoService } from 'src/app/usecases/produto/buscar-produto.service';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {

  public produto: Produto = new Produto();
  public carregamento: boolean = false;
  public quantidadeItem: FormControl = new FormControl(1, {
    validators: Validators.required
  })

  public constructor(
    private readonly router: Router,
    private spinner: NgxSpinnerService,
    private readonly toastr: ToastrService,
    private readonly buscarProduto: BuscarProdutoService,
    private readonly adicionarItemCarrinho: AdicionarItemCarrinhoService
  ) {}

  public carregarProduto(produtoId: number): void {
    this.carregamento = true;
    this.spinner.show();
    this.buscarProduto.executar(produtoId).subscribe(response => {
      this.produto = response;
      console.log(this.produto);
      const imagens: ImagemProduto[] = this.produto.imagens;
      imagens.sort(this.ordenarImg);
      this.spinner.hide();
      this.carregamento = false;
    });
  }

  public ordenarImg(imgA: ImagemProduto, imgB: ImagemProduto) {
    if(imgA.imagemPrincipal)
      return -1;
    return 1;
  }

  public irParaOpcoesPagamento(id: number): void {
    this.router.navigateByUrl(`/loja/produto/${id}/opcoes-pagamento`);
  }

  public adicionarProdutoAoCarrinho(): void {
    const carrinhoId = 1;
    this.spinner.show();
    const novoItem = new ItemCarrinho({
      quantidade: 1,
      produto: this.produto,
      selecionado: true,
    })
    this.adicionarItemCarrinho.executar(carrinhoId, novoItem).subscribe(response => {
      this.toastr.success('O produto foi adicionado ao seu carrinho', 'Tudo Ok!', { progressBar: true });
    }, err => {

    }).add(() => {
      this.spinner.hide();
    })
  }

  ngOnInit(): void {
    const produtoId = parseInt(this.router.url.split('/')[3]);
    this.carregarProduto(produtoId);
  }
}