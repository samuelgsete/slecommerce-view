import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public usuario: string = 'Samuel';
  public rotas: any[] = [
    { icone: 'shope', destino: '/loja/catalogo' },
    { icone: 'shopping_basket', destino: 'loja/carrinho' }
  ]

  public constructor(private readonly router: Router) {}

  public navegarPara(destino: string): void {
    this.router.navigateByUrl(destino);
  }

  ngOnInit(): void {
  }
}