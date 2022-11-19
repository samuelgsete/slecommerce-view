import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Autoplay, EffectFade, EffectCoverflow, EffectFlip, Navigation } from 'swiper';

SwiperCore.use([ Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow, EffectFlip ]);

@Component({
  selector: 'app-banner-destaques',
  templateUrl: './banner-destaques.component.html',
  styleUrls: ['./banner-destaques.component.css']
})
export class BannerDestaquesComponent implements OnInit {

  public destaques: any[] = [
    { nome: 'Notebook Samsung', urlImg: '/assets/img/banner/banner-destaque-4.png', destino: '' },
    { nome: 'Console PlayStation 4 Slim', urlImg: '/assets/img/banner/banner-destaque-5.png', destino: '' },
    { nome: 'Placas de Video', urlImg: '/assets/img/banner/banner-destaque-1.png', destino: '' },
    { nome: 'Perifericos', urlImg: '/assets/img/banner/banner-destaque-2.png', destino: '' },
    { nome: 'Console Xbox One X', urlImg: '/assets/img/banner/banner-destaque-3.png', destino: '' },
  ];

  public constructor() {}

  ngOnInit(): void {
  }
}