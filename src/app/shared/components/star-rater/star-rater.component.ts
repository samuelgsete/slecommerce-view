import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rater',
  templateUrl: './star-rater.component.html',
  styleUrls: ['./star-rater.component.css']
})
export class StarRaterComponent implements OnInit {

  @Input() public aprovacaoMedia: number = 4;
  @Input() public totalAvaliadores: number = 4055;

  public constructor() {}

  ngOnInit(): void {}
}