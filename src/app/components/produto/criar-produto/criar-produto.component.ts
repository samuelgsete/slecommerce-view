import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ImagemProduto } from 'src/app/model/imagem-produto.entity';
import { Produto } from 'src/app/model/produto.entity';
import { CriarProdutoService } from 'src/app/usecases/produto/criar-produto.service';
import { EnviarImagemComponent } from '../../imagem-produto/enviar-imagem/enviar-imagem.component';

const PORCENTAGEM = 100;

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  public produto!: FormGroup
  public caracteristicas!: FormGroup
  public precificacao!: FormGroup
  public dimensoes!: FormGroup
  public imagens: ImagemProduto[] = []
  public condicaoProduto = ['Novo', 'Usado', 'Seminovo', 'Reembalado']
  public cores = [
    { nome: 'Preto', codigo: '#000000' },
    { nome: 'Branco', codigo: '#F8F8FF' },
    { nome: 'Azul', codigo: '#6A5ACD' },
    { nome: 'Verde', codigo: '#00FA9A' },
    { nome: 'Vermelho', codigo: '#FF0000' },
  ]
  @ViewChild('imagens')
  public imagensComponent!: EnviarImagemComponent

  public constructor(
    private readonly criar: CriarProdutoService,
    private readonly _fb: FormBuilder
  ) { }

  public cadastrarProduto() {
    const novoProduto = new Produto({
      id: null,
      nome: this.produto.value.nome,
      marca: this.produto.value.marca,
      modelo: this.produto.value.modelo,
      linha: this.produto.value.linha,
      detalhes: this.produto.value.detalhes,
      condicao: this.caracteristicas.value.condicao,
      garantia: this.caracteristicas.value.garantia,
      estoque: this.caracteristicas.value.estoque,
      cor: this.caracteristicas.value.cor,
      freteGratis: this.caracteristicas.value.freteGratis,
      recemLancado: this.caracteristicas.value.recemLancado,
      conteudoEmbalagem: this.caracteristicas.value.conteudoEmbalagem,
      preso: this.precificacao.value.preco,
      parcelamento: this.precificacao.value.parcelamento,
      taxaDesconto: this.precificacao.value.taxaDesconto / PORCENTAGEM,
      imagens: this.imagensComponent.imagens
    })

    console.log(novoProduto)
  }

  public formatLabelDesconto(taxaDesconto: number) {
    return taxaDesconto + "%";
  }

  public comparadorCor(cor1: any, cor2: any): boolean {
    if (cor1.nome == cor2.nome)
      return true;
    return false
  }

  public atualizarPreco() {
    const taxaDesconto = this.precificacao.controls['taxaDesconto'].value / 100;
    const precoAtual = this.precificacao.controls['preco'].value;
    const desconto = precoAtual * taxaDesconto
    const novoPreco = precoAtual - desconto;
    this.precificacao.controls['valorDesconto'].patchValue(desconto);
    this.precificacao.controls['precoDesconto'].patchValue(novoPreco);
  }

  ngOnInit(): void {
    this.produto = this._fb.group({
      nome: ['PlayStation 4 Pro 1TB de HDD', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
      marca: ['Sony', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      modelo: ['PlayStation 4', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      linha: ['PlayStation', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      detalhes: ['Console PlaySatation 4 Pro você terá entreterimento dos os dias', [Validators.minLength(4), Validators.maxLength(9000)]],
    })

    this.caracteristicas = this._fb.group({
      condicao: ['Novo', [Validators.required]],
      garantia: [24, [Validators.required]],
      estoque: ['25', [Validators.required]],
      freteGratis: [true],
      recemLancado: [false],
      cor: ['Branco', [Validators.required]],
      conteudoEmbalagem: ['Console PlaySatation 4, Manual de instruções, Cabo HDMI, Controle Dualshock Black e carregador USB', [Validators.required]]
    })

    this.precificacao = this._fb.group({
      preco: [2499.99, [Validators.required]],
      parcelamento: [12, [Validators.required]],
      taxaDesconto: [1, [Validators.required]],
      valorDesconto: [0],
      precoDesconto: [0]
    })

    this.dimensoes = this._fb.group({
      peso: [2.21, [Validators.required]],
      altura: [55, [Validators.required]],
      largura: [295, [Validators.required]],
      profundidade: [327, [Validators.required]]
    })
  }
}