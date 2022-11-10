import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

import { Produto } from 'src/app/model/produto.entity';
import { BuscarProdutoService } from 'src/app/usecases/produto/buscar-produto.service';
import { cores } from 'src/app/utils/cores.util';
import { EnviarImagemComponent } from '../../imagem-produto/enviar-imagem/enviar-imagem.component';
import { AdicionarEspecificacaoComponent } from '../adicionar-especificacao/adicionar-especificacao.component';
import { AtualizarProdutoService } from 'src/app/usecases/produto/atualizar-produto.service';
import { PrecificacaoProdutoComponent } from '../precificacao-produto/precificacao-produto.component';

const PORCENTAGEM = 100;

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  public produtoCriado = new Produto();
  public produto!: FormGroup;
  public caracteristicas!: FormGroup;
  public dimensoes!: FormGroup;
  public condicaoProduto = ['Novo', 'Usado', 'Seminovo', 'Reembalado']
  public cores = cores;

  @ViewChild('imagens')
  public componenteEnviarImagem!: EnviarImagemComponent
  @ViewChild('especificacoes')
  public componenteAdicionarEspecificacoes!: AdicionarEspecificacaoComponent;
  @ViewChild('precificacao')
  public componentePrecificacao!: PrecificacaoProdutoComponent;

  public carregamento: boolean = false;
  public atualizando: boolean = false;

  public constructor(
    private readonly router: Router,
    private readonly _fb: FormBuilder,
    private readonly toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private readonly buscarProduto: BuscarProdutoService,
    private readonly editarProduto: AtualizarProdutoService
  ) { }

  public formatLabelDesconto(taxaDesconto: number): string {
    return taxaDesconto + "%";
  }

  public comparadorCor(cor1: any, cor2: any): boolean {
    if (cor1.nome == cor2.nome)
      return true;
    return false
  }

  public carregarProduto(produtoId: number): void {
    this.carregamento = true;
    this.spinner.show();
    this.buscarProduto.executar(produtoId).subscribe(response => {
      this.produtoCriado = response;
      this.preecherProduto(this.produtoCriado);
      this.spinner.hide();
      this.carregamento = false;
    });
  }

  public atualizarProduto(): void {
    this.atualizando = true;
    const imagensProduto = this.componenteEnviarImagem.imagens;
    const especificacoes = this.componenteAdicionarEspecificacoes.especificacoes;
    const produtoAtualizado = new Produto({
      id: this.produtoCriado.id,
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
      aprovacaoMedia: this.produtoCriado.aprovacaoMedia,
      unidadesVendidas: this.produtoCriado.unidadesVendidas,
      especificacoes: especificacoes
    });
    this.editarProduto.executar(produtoAtualizado.id, produtoAtualizado,).subscribe(response => {
      this.toastr.success('Atualizado com sucesso', 'Tudo Ok!', { progressBar: true });
      this.router.navigateByUrl('/produto/listar');
    }, evento => {
      console.log(evento);
      this.toastr.error(evento.error.mensagem, 'Houve um ERRO', { progressBar: true });
    }).add(() => {
      this.atualizando = false;
    });
  }

  public preecherProduto(produto: Produto): void {
    this.produto = this._fb.group({
      nome: [produto.nome, [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
      marca: [produto.fabricante, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      modelo: [produto.modelo, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      linha: [produto.linha, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      fabricante: [produto.fabricante, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      detalhes: [produto.detalhes, [Validators.minLength(4), Validators.maxLength(20000)]],
    })
    this.caracteristicas = this._fb.group({
      condicao: [produto.condicao, [Validators.required]],
      garantia: [produto.garantia, [Validators.required]],
      estoque: [produto.estoque, [Validators.required]],
      freteGratis: [produto.freteGratis],
      recemLancado: [produto.recemLancado],
      cor: [produto.cor, [Validators.required]],
      conteudoEmbalagem: [produto.conteudoEmbalagem, [Validators.required]]
    })
    this.dimensoes = this._fb.group({
      peso: [produto.peso, [Validators.required]],
      altura: [produto.altura, [Validators.required]],
      largura: [produto.largura, [Validators.required]],
      profundidade: [produto.profundidade, [Validators.required]]
    })
  }

  ngOnInit(): void {
    const produtoId = parseInt(this.router.url.split('/')[2]);
    this.carregarProduto(produtoId);
  }
}