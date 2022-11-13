import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';

import { ImagemProduto } from 'src/app/model/imagem-produto.entity';
import { Produto } from 'src/app/model/produto.entity';
import { ListarProdutosPaginado } from 'src/app/usecases/produto/listar-produtos-paginado';
import { Paginacao } from 'src/app/utils/paginacao.entity';

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

  public constructor(
    private spinner: NgxSpinnerService,
    private readonly listarProdutosPaginado: ListarProdutosPaginado,
  ) {}

  public listarPaginado(paginacao: Paginacao): void {
    this.carregamento = true;
    this.spinner.show();
    this.listarProdutosPaginado.executar(paginacao).subscribe(response => {
      this.produtos = response.content;
      this.paginacao.primeiraPagina = response.first;
      this.paginacao.ultimaPagina = response.last;
      this.paginacao.totalElementos = response.totalElements;
      this.spinner.hide();
      this.carregamento = false;
    });
  }

  public imagemPrincipal(imagens: ImagemProduto[]): ImagemProduto | undefined {
    return imagens.find( img => { return img.imagemPrincipal })
  }

  ngOnInit(): void {
    this.listarPaginado(this.paginacao);
  }
}