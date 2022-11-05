import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

import { Produto } from 'src/app/model/produto.entity';
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
    private readonly buscarProduto: BuscarProdutoService
  ) { }

  public carregarProduto(produtoId: number): void {
    this.carregamento = true;
    this.spinner.show();
    this.buscarProduto.executar(produtoId).subscribe(response => {
      this.produto = response;
      console.log(this.produto);
      this.spinner.hide();
      this.carregamento = false;
    });
  }

  ngOnInit(): void {
    const produtoId = parseInt(this.router.url.split('/')[2]);
    this.carregarProduto(produtoId);
  }
}