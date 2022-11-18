import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerDestaquesComponent } from './banner-destaques/banner-destaques.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopBarComponent,
    FooterComponent,
    BannerDestaquesComponent
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
  ]
})
export class LayoutModule {}
