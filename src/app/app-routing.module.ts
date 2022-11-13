import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { VerProdutoComponent } from './components/catalogo/ver-produto/ver-produto.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './components/produto/editar-produto/editar-produto.component';
import { ListarProdutosComponent } from './components/produto/listar-produtos/listar-produtos.component';

const routes: Routes = [
  { path: 'catalogo/ver', component: CatalogoComponent },
  { path: 'produto/listar', component: ListarProdutosComponent },
  { path: 'produto/criar', component: CriarProdutoComponent },
  { path: 'produto/:id/ver', component: VerProdutoComponent },
  { path: 'produto/:id/editar', component: EditarProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
