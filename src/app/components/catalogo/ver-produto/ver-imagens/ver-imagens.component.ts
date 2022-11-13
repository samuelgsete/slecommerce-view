import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Autoplay, EffectCoverflow } from 'swiper';

import { ImagemProduto } from 'src/app/model/imagem-produto.entity';

SwiperCore.use([ Pagination, Autoplay, EffectCoverflow ]);

@Component({
  selector: 'app-ver-imagens',
  templateUrl: './ver-imagens.component.html',
  styleUrls: ['./ver-imagens.component.css']
})
export class VerImagensComponent implements OnInit {

  @Input() public imagens: ImagemProduto[] = [];

  public constructor() {}

  ngOnInit(): void {}
}