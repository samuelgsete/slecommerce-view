import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Precificacao } from "../../../model/precificacao.entity";

const PORCENTO = 100;

@Component({
  selector: 'app-precificacao-produto',
  templateUrl: './precificacao-produto.component.html',
  styleUrls: ['./precificacao-produto.component.css']
})
export class PrecificacaoProdutoComponent implements OnInit {

  public formularioPrecificacao!: FormGroup;
  
  @Input()
  public precificacao: Precificacao = new Precificacao();

  public constructor(private readonly _fb: FormBuilder) { }

  public precificar(): void {
    const precoBase = this.formularioPrecificacao.controls['precoBase'].value
    const taxaDescontoAvista = this.formularioPrecificacao.controls['taxaDescontoAvista'].value / PORCENTO;
    const taxaDescontoParcelamento = this.formularioPrecificacao.controls['taxaDescontoParcelamento'].value / PORCENTO;
    const descontoAvista = precoBase * taxaDescontoAvista;
    const descontoParcelamento = precoBase * taxaDescontoParcelamento;
    const precoAvista = precoBase - descontoAvista;
    const precoParcelmaento = precoBase - descontoParcelamento;
    this.formularioPrecificacao.controls['precoAvista'].patchValue(precoAvista);
    this.formularioPrecificacao.controls['precoParcelamento'].patchValue(precoParcelmaento);
    this.formularioPrecificacao.controls['descontoAvista'].patchValue(descontoAvista);
    this.formularioPrecificacao.controls['descontoParcelamento'].patchValue(descontoParcelamento);
  }

  public formatLabelDesconto(taxaDesconto: number): any {
    return taxaDesconto + "%";
  }

  public getPrecificacao(): Precificacao {
    return new Precificacao({
      id: this.formularioPrecificacao.value.id,
      precoBase: this.formularioPrecificacao.value.precoBase,
      precoAvista: this.formularioPrecificacao.value.precoAvista,
      precoParcelamento: this.formularioPrecificacao.value.precoParcelamento,
      taxaDescontoAvista: this.formularioPrecificacao.value.taxaDescontoAvista / PORCENTO,
      taxaDescontoParcelamento: this.formularioPrecificacao.value.taxaDescontoParcelamento / PORCENTO,
      descontoAvista: this.formularioPrecificacao.value.descontoAvista,
      descontoParcelamento: this.formularioPrecificacao.value.descontoParcelamento,
      parcelamento: this.formularioPrecificacao.value.parcelamento
    });
  }

  ngOnInit(): void {
    this.formularioPrecificacao = this._fb.group({
      id: [this.precificacao.id],
      precoBase: [this.precificacao.precoBase, Validators.required],
      taxaDescontoAvista: [this.precificacao.taxaDescontoAvista * PORCENTO, Validators.required],
      taxaDescontoParcelamento: [this.precificacao.taxaDescontoParcelamento * PORCENTO, Validators.required],
      precoAvista: [this.precificacao.precoAvista],
      precoParcelamento: [this.precificacao.precoParcelamento],
      descontoAvista: [this.precificacao.descontoAvista],
      descontoParcelamento: [this.precificacao.descontoParcelamento],
      parcelamento: [this.precificacao.parcelamento, Validators.required]
    });
  }
}