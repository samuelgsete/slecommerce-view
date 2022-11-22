import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public rotas: any[] = [
    { nome: 'Editar perfil', destino: 'editar', estaAtiva: true },
    { nome: 'Meus pedidos', destino: 'loja/perfil/endereco', estaAtiva: false },
    { nome: 'Meus enderecos', destino: 'endereco', estaAtiva: false },
    { nome: 'Meus favoritos', destino: 'loja/perfil/endereco', estaAtiva: false },
    { nome: 'Cartões crédito/débito', destino: 'loja/perfil/endereco', estaAtiva: false },
    { nome: 'Segurança', destino: 'loja/perfil/endereco', estaAtiva: false }
  ]

  public constructor(private readonly router: Router) {}

  ngOnInit(): void {
  }
}