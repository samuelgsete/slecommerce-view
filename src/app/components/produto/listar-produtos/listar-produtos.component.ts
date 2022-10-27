import { Component, OnInit } from '@angular/core';

import { Produto } from 'src/app/model/produto.entity';
import { ListarProdutosService } from 'src/app/usecases/produto/listar-produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  public produtos: Produto[] = [];

  public constructor(private readonly listar: ListarProdutosService) {}

  ngOnInit(): void {
    this.listar.executar().subscribe(response => {
      this.produtos = response;
      console.log(response);
    })
  }
}