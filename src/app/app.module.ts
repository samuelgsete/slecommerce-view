import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoModule } from './components/produto/produto.module';
import { ImagemProdutoModule } from './components/imagem-produto/imagem-produto.module';
import { CatalogoModule } from './components/catalogo/catalogo.module';
import { ClienteModule } from './components/cliente/cliente.module';
import { CarrinhoModule } from './components/carrinho/carrinho.module';
import { LayoutModule } from './layout/layout.module';
import { PerfilModule } from './components/perfil/perfil.module';
import { RecursoObterQtdProdutosCarrinho } from './resource/carrinho/recurso-obter-qtd-produtos-carrinho';
import { ObterQtdProdutosCarrinho } from './usecases/carrinho/obter-qtd-produtos-carrinho';
import { EnderecoUsuarioModule } from './components/endereco-usuario/endereco-usuario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProdutoModule,
    ImagemProdutoModule,
    CatalogoModule,
    ClienteModule,
    CarrinhoModule,
    LayoutModule,
    PerfilModule,
    EnderecoUsuarioModule
  ],
  providers: [
    RecursoObterQtdProdutosCarrinho,
    ObterQtdProdutosCarrinho
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}