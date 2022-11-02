import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoModule } from './components/produto/produto.module';
import { ImagemProdutoModule } from './components/imagem-produto/imagem-produto.module';
import { CatalogoModule } from './components/catalogo/catalogo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProdutoModule,
    ImagemProdutoModule,
    CatalogoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }