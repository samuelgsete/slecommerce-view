import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public mostrarMenu: boolean = true;

  public rotas: any[] = [
    { nome: 'Meus pedidos', icone: 'fastfood', destino: 'loja/perfil/endereco', estaAtiva: true },
    { nome: 'Meus enderecos', icone: 'place', destino: 'loja/perfil/endereco', estaAtiva: false },
    { nome: 'Meus favoritos', icone: 'favorite', destino: 'loja/perfil/endereco', estaAtiva: false },
    { nome: 'Cartões Crédito/Débito', icone: 'payments', destino: 'loja/perfil/endereco', estaAtiva: false },
    { nome: 'Segurança', icone: 'security', destino: 'loja/perfil/endereco', estaAtiva: false },
  ]

  public constructor() {}

  public ocultarMenu(): void {
    this.mostrarMenu = false;
  }

  ngOnInit(): void {}
}