import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Produto } from 'src/app/model/produto.entity';
import { CriarProdutoService } from 'src/app/usecases/produto/criar-produto.service';
import { cores } from 'src/app/utils/cores.util';
import { EnviarImagemComponent } from '../../imagem-produto/enviar-imagem/enviar-imagem.component';
import { AdicionarEspecificacaoComponent } from '../adicionar-especificacao/adicionar-especificacao.component';
import { PrecificacaoProdutoComponent } from '../precificacao-produto/precificacao-produto.component';

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
  public condicaoProduto = ['Novo', 'Usado', 'Seminovo', 'Reembalado']
  public cores = cores;

  @ViewChild('imagens')
  public componenteEnviarImagem!: EnviarImagemComponent;
  @ViewChild('especificacoes')
  public componenteAdicionarEspecificacoes!: AdicionarEspecificacaoComponent; 
  @ViewChild('precificacao')
  public componentePrecificacao!: PrecificacaoProdutoComponent;

  public cadastrando: boolean = false;

  public constructor(
    private readonly router: Router,
    private readonly _fb: FormBuilder,
    private readonly toastr: ToastrService,
    private readonly criar: CriarProdutoService,
  ) {}

  public produtosCadastrados(): void {
    this.router.navigateByUrl('/produto/listar');
  }

  public cadastrarProduto(): void {
    this.cadastrando = true;
    const imagensProduto = this.componenteEnviarImagem.imagens;
    const especificacoes = this.componenteAdicionarEspecificacoes.especificacoes;
    const novoProduto = new Produto({
      id: null,
      nome: this.produto.value.nome,
      fabricante: this.produto.value.fabricante,
      marca: this.produto.value.marca,
      modelo: this.produto.value.modelo,
      linha: this.produto.value.linha,
      precificacao: this.componentePrecificacao.getPrecificacao(),
      detalhes: this.produto.value.detalhes,
      condicao: this.caracteristicas.value.condicao,
      garantia: this.caracteristicas.value.garantia,
      estoque: this.caracteristicas.value.estoque,
      cor: this.caracteristicas.value.cor,
      freteGratis: this.caracteristicas.value.freteGratis,
      recemLancado: this.caracteristicas.value.recemLancado,
      conteudoEmbalagem: this.caracteristicas.value.conteudoEmbalagem,
      imagens: imagensProduto,
      altura: this.dimensoes.value.altura,
      largura: this.dimensoes.value.largura,
      profundidade: this.dimensoes.value.profundidade,
      peso: this.dimensoes.value.peso,
      aprovacaoMedia: 0,
      unidadesVendidas: 0,
      especificacoes: especificacoes
    });
    this.criar.executar(novoProduto).subscribe(response =>{
      this.toastr.success('Cadastrado com sucesso', 'Tudo Ok!', { progressBar: true });
      this.router.navigateByUrl('/produto/listar');
    }, evento => {
      console.log(evento);
      this.toastr.error(evento.error.mensagem, 'Houve um ERRO', { progressBar: true });
    }).add(() => {
      this.cadastrando = false;
    });
  }

  public formatLabelDesconto(taxaDesconto: number): string {
    return taxaDesconto + "%";
  }

  public comparadorCor(cor1: any, cor2: any): boolean {
    if(cor1.nome == cor2.nome)
      return true;
    return false
  }

  ngOnInit(): void {
    this.produto = this._fb.group({
      nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
      marca: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      modelo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      linha: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      fabricante: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      detalhes: ['', [Validators.minLength(4), Validators.maxLength(20000)]],
    })
    this.caracteristicas = this._fb.group({
      condicao: ['', [Validators.required]],
      garantia: [12, [Validators.required]],
      estoque: ['', [Validators.required]],
      freteGratis: [true],
      recemLancado: [false],
      cor: ['', [Validators.required]],
      conteudoEmbalagem: ['', [Validators.required]]
    })
    this.precificacao = this._fb.group({
      preco: [99.99, [Validators.required]],
      parcelamento: [12, [Validators.required]],
      taxaDesconto: [1, [Validators.required]],
      descontoAvista: [0, [Validators.required]],
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