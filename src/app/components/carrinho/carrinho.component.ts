import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

import { Carrinho } from 'src/app/model/carrinho.entity';
import { ImagemProduto } from 'src/app/model/imagem-produto.entity';
import { ItemCarrinho } from 'src/app/model/ItemCarrinho';
import { BuscarCarrinhoService } from 'src/app/usecases/carrinho/buscar-carrinho.service';
import { EditarQtdItemCarrinhoService } from 'src/app/usecases/carrinho/editar-qtd-item-carrinho.service';
import { RemoverItemCarrinhoService } from 'src/app/usecases/carrinho/remover-item-carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public carrinho: Carrinho = new Carrinho();
  public carregamento: boolean = false;
  public cupomDesconto: FormControl = new FormControl('', {
    validators: Validators.required
  })

  public constructor(
    public readonly router: Router,
    private spinner: NgxSpinnerService,
    private readonly toastr: ToastrService,
    public readonly buscarCarrinho: BuscarCarrinhoService,
    public readonly removerItem: RemoverItemCarrinhoService,
    public readonly editarQtdITem: EditarQtdItemCarrinhoService
  ) {}

  public carregarCarrinho(): void {
    this.carregamento = true;
    this.spinner.show();
    const clienteId = 1; // ID Cliente provisioriamente estático
    this.buscarCarrinho.executar(clienteId).subscribe(response => {
      this.carrinho = response;
      console.log(this.carrinho);
      this.spinner.hide();
    }, err => {

    }).add(() => {
      this.carregamento = false;
    })
  }

  public imagemPrincipal(imagens: ImagemProduto[]): ImagemProduto | undefined {
    return imagens.find(imagem => { return imagem.imagemPrincipal == true });
  }

  public removerItemCarrinho(carrinhoId: number, item: ItemCarrinho): void {
    item.atualizando = true;
    this.removerItem.executar(carrinhoId, item).subscribe(response => {
      this.carregarCarrinho()
      this.toastr.success('O Item foi removido do seu carrinho', 'Tudo Ok!', { progressBar: true });
      item.atualizando = false;
    }, err => {

    })
  }

  public addQuantidadeItem(carrinhoId: number, itemAdicionado: ItemCarrinho): void {
    itemAdicionado.atualizando = true;
    itemAdicionado.quantidade = itemAdicionado.quantidade + 1;
    this.editarItem(carrinhoId, itemAdicionado);
  }

  public removerQuantidadeItem(carrinhoId: number, itemAdicionado: ItemCarrinho): void {
    itemAdicionado.atualizando = true;
    itemAdicionado.quantidade = itemAdicionado.quantidade - 1;
    this.editarItem(carrinhoId, itemAdicionado);
  }

  public editarItem(carrinhoId: number, itemAdicionado: ItemCarrinho): void {
    this.editarQtdITem.executar(carrinhoId, itemAdicionado).subscribe(response => {
      this.carregarCarrinho();
      itemAdicionado.atualizando = false;
    }, err => {

    })
  }

  public selecionarItem(estaSelecionnado: boolean, carrinhoId: number, itemSelecionado: ItemCarrinho): void {
    itemSelecionado.selecionado = estaSelecionnado;
    console.log(itemSelecionado);
    this.editarItem(carrinhoId, itemSelecionado);
  }

  public verProduto(produtoId: number): void {
    this.router.navigateByUrl(`loja/produto/${produtoId}/ver`);
  }

  public irParaCatalogo(): void {
    this.router.navigateByUrl('loja/catalogo');
  }

  ngOnInit(): void {
    this.carregarCarrinho();
  }
}