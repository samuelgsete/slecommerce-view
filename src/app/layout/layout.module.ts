import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerDestaquesComponent } from './banner-destaques/banner-destaques.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListarProdutosPaginado } from '../usecases/produto/listar-produtos-paginado';
import { RecursoPesquisarProduto } from '../resource/produto/recurso-pesquisar-produto';

@NgModule({
  declarations: [
    LayoutComponent,
    TopBarComponent,
    FooterComponent,
    BannerDestaquesComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
    TopBarComponent,
    FooterComponent,
    BannerDestaquesComponent
  ],
  providers: [
    ListarProdutosPaginado,
    RecursoPesquisarProduto
  ]
})
export class LayoutModule {}
