import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';

import { ImagemProduto } from 'src/app/model/imagem-produto.entity';
import { Produto } from 'src/app/model/produto.entity';
import { Paginacao } from 'src/app/utils/paginacao.entity';
import { ordenacaoProdutos } from 'src/app/utils/ordenacao-produtos';
import { RecursoListarProdutosPaginado } from 'src/app/resource/produto/recurso-listar-produtos-paginado';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow ]);

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public produtos: Produto[] = [];
  public paginacao: Paginacao = new Paginacao();
  public carregamento: boolean = false;
  public ordenacaoProdutos: any[] = ordenacaoProdutos;

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly listar: RecursoListarProdutosPaginado,
  ) {}

  public imagemPrincipal(imagens: ImagemProduto[]): ImagemProduto | undefined {
    return imagens.find( img => { return img.imagemPrincipal })
  }

  public irParaProduto(id: number): void {
    this.router.navigateByUrl(`loja/produto/${id}/ver`);
  }

  public ordenarProdutos(ordenacao: string): void {
    const paginacao: Paginacao = new Paginacao();
    paginacao.ordenacao = ordenacao;
    this.navegar(paginacao.palavraChave, paginacao.ordenacao);
  }

  public navegar(_palavraChave: string, _ordenacao: string): void {
    this.router.navigate([], { queryParams: { palavraChave: _palavraChave, ordenacao: _ordenacao } });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(parametros => {
      this.paginacao.ordenacao = parametros['ordenacao'] || '';
      this.paginacao.palavraChave = parametros['palavrachave'] || '';
      this.listar.executar(this.paginacao);
      this.listar.ok().subscribe(resposta => {
        this.produtos = resposta.content;
        this.paginacao.primeiraPagina = resposta.first;
        this.paginacao.ultimaPagina = resposta.last;
        this.paginacao.totalElementos = resposta.totalElements;
      })
    });
  }
}