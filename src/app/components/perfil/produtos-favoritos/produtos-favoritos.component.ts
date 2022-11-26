import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner"

import { ListarProdutosFavoritos } from 'src/app/usecases/cliente/listar-produtos-favoritos.service';

export interface IProduto {
  id: number
  nome: string
  urlImagem: string
  estoque: number
}

@Component({
  selector: 'app-produtos-favoritos',
  templateUrl: './produtos-favoritos.component.html',
  styleUrls: ['./produtos-favoritos.component.css']
})
export class ProdutosFavoritosComponent implements OnInit {

  public produtosFavoritos: IProduto[] = [];

  public constructor(
    private spinner: NgxSpinnerService,
    private readonly listarFavoritos: ListarProdutosFavoritos
  ) {}

  public carregarProdutosFavoritos(clienteId: number): void {
    this.spinner.show();
    this.listarFavoritos.executar(clienteId).subscribe(resposta => {
      this.produtosFavoritos = resposta;
      console.log(this.produtosFavoritos);
    }).add(() => {
      this.spinner.hide();
    })
  }

  ngOnInit(): void {
    const clienteId = 1;
    this.carregarProdutosFavoritos(clienteId);
  }
}