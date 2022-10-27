import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { ListarProdutosComponent } from './components/produto/listar-produtos/listar-produtos.component';

const routes: Routes = [
  { path: 'produto/listar', component: ListarProdutosComponent },
  { path: 'produto/criar', component: CriarProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
