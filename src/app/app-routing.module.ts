import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { OpcoesPagamentoComponent } from './components/catalogo/opcoes-pagamento/opcoes-pagamento.component';
import { VerProdutoComponent } from './components/catalogo/ver-produto/ver-produto.component';
import { RegistrarClienteComponent } from './components/cliente/registrar-cliente/registrar-cliente.component';
import { EditarPerfilComponent } from './components/perfil/editar-perfil/editar-perfil.component';
import { EnderecoUsuarioComponent } from './components/perfil/endereco-usuario/endereco-usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProdutosFavoritosComponent } from './components/perfil/produtos-favoritos/produtos-favoritos.component';
import { VerCartoesCreditoComponent } from './components/perfil/ver-cartoes-credito/ver-cartoes-credito.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './components/produto/editar-produto/editar-produto.component';
import { ListarProdutosComponent } from './components/produto/listar-produtos/listar-produtos.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'catalogo/ver', component: CatalogoComponent },
  { path: 'produto/listar', component: ListarProdutosComponent },
  { path: 'produto/criar', component: CriarProdutoComponent },
  { path: 'produto/:id/ver', component: VerProdutoComponent },
  { path: 'produto/:id/editar', component: EditarProdutoComponent },
  { path: 'cliente/registrar', component: RegistrarClienteComponent },
  { path: 'loja', component: LayoutComponent, children: [
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'produto/:id/ver', component: VerProdutoComponent },
    { path: 'produto/:id/opcoes-pagamento', component: OpcoesPagamentoComponent },
    { path: 'carrinho', component: CarrinhoComponent },
    { path: 'perfil', component: PerfilComponent, children: [
      { path: 'endereco', component: EnderecoUsuarioComponent },
      { path: 'editar', component: EditarPerfilComponent },
      { path: 'produtos/favoritos', component: ProdutosFavoritosComponent },
      { path: 'cartoes-credito/ver', component: VerCartoesCreditoComponent },
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
