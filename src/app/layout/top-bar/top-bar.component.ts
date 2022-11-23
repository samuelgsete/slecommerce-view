import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Produto } from 'src/app/model/produto.entity';
import { ListarProdutosPaginado } from 'src/app/usecases/produto/listar-produtos-paginado';
import { Paginacao } from 'src/app/utils/paginacao.entity';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public consultar: FormControl = new FormControl('');
  public produtos: Produto[] = [];
  public usuario: string = 'Samuel';
  public rotas: any[] = [
    { icone: 'shope', destino: '/loja/catalogo' },
    { icone: 'shopping_basket', destino: 'loja/carrinho' }
  ];
  public consultando: boolean = false;

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private listarPaginado: ListarProdutosPaginado
  ) {}

  public navegarPara(destino: string): void {
    this.router.navigateByUrl(destino);
  }

  public displayFn(produto: Produto): string {
    return produto.nome;
  }

  public itemSelecionado(produto: Produto): void {
    this.router.navigate(['/loja/catalogo'], { queryParams: { palavrachave: produto.nome.toLowerCase() }});
  }

  public buscarProduto(palavraChave: string): void {
    this.consultando = true;
    const paginacao: Paginacao = new Paginacao();
    paginacao.palavraChave = palavraChave;
    this.listarPaginado.executar(paginacao).subscribe(resposta => {
      this.produtos = resposta.content;
      this.router.navigate([], { queryParams: { palavrachave: palavraChave.toLowerCase() }});
    }).add(() => {
      this.consultando = false;
    })
  }

  ngOnInit(): void {
    this.consultar.valueChanges.pipe(debounceTime(700)).subscribe(palavraChave => {
      this.buscarProduto(palavraChave);
    });
  }
}