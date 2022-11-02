import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerProdutoComponent } from './components/catalogo/ver-produto/ver-produto.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { ListarProdutosComponent } from './components/produto/listar-produtos/listar-produtos.component';

const routes: Routes = [
  { path: 'produto/listar', component: ListarProdutosComponent },
  { path: 'produto/criar', component: CriarProdutoComponent },
  { path: 'produto/:id/ver', component: VerProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
