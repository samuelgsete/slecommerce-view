import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcular-frete',
  templateUrl: './calcular-frete.component.html',
  styleUrls: ['./calcular-frete.component.css']
})
export class CalcularFreteComponent implements OnInit {

  public cep: FormControl = new FormControl('', {
    validators: Validators.required
  })

  public constructor() { }

  ngOnInit(): void {}
}