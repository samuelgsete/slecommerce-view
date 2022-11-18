import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public anoAtual: number = new Date().getFullYear();
  public nomeFantasia: string = 'LyStore';
  public redesSociais: any[] = [
    { link: '', urlImg: '/assets/img/icons/instagram-icon.png', nome: 'Instagram' },
    { link: '', urlImg: '/assets/img/icons/facebook-icon.png', nome: 'Facebook' },
    { link: '', urlImg: '/assets/img/icons/youtube-icon.png', nome: 'YouTube' },
    { link: '', urlImg: '/assets/img/icons/whatsapp-icon.png', nome: 'WhatsAppp' },
    { link: '', urlImg: '/assets/img/icons/telegram-icon.png', nome: 'Telegram' },
  ]

  public pagamentos: any[] = [
    { urlImg: '/assets/img/icons/master.png', nome: 'Mastercard' },
    { urlImg: '/assets/img/icons/hiper.png', nome: 'Hipercard' },
    { urlImg: '/assets/img/icons/visa.png', nome: 'Visa' },
    { urlImg: '/assets/img/icons/elo.png', nome: 'Elo' },
    { urlImg: '/assets/img/icons/boleto.png', nome: 'Boleto bancário' },
    { urlImg: '/assets/img/icons/pix.png', nome: 'Pix' }
  ]

  public constructor() {}

  ngOnInit(): void {
  }
}