import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ImagemProduto } from 'src/app/model/imagem-produto.entity';

const SCROLL_VALUE = 100;

@Component({
  selector: 'app-ver-imagens',
  templateUrl: './ver-imagens.component.html',
  styleUrls: ['./ver-imagens.component.css']
})
export class VerImagensComponent implements OnInit {

  @Input() public imagens: ImagemProduto[] = [];
  public imagemVizualizada!: ImagemProduto;
  @ViewChild('scrollImages') scrollImages!: ElementRef;

  public constructor() { }

  public alternarImagem(imagem: ImagemProduto): void {
    this.imagemVizualizada.imagemPrincipal = false;
    this.imagemVizualizada = imagem;
    this.imagemVizualizada.imagemPrincipal = true;
  }

  public verImagem(urlImagem: string): void {
    window.open(urlImagem);
  }

  public scrollUp(el: HTMLElement): void {
    el.scrollTop -= SCROLL_VALUE;
  }

  public scrollDown(el: HTMLElement): void {
    el.scrollTop += SCROLL_VALUE;
  }

  ngOnInit(): void {
    this.imagemVizualizada = this.imagens[0];
  }
}