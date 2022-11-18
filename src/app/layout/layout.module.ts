import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
    TopBarComponent,
    FooterComponent
  ]
})
export class LayoutModule {}
