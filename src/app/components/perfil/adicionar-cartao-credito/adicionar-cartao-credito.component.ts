import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';

import { bandeiras } from 'src/app/utils/bandeiras-cartao';
import { RecursoAdicionarCartao } from 'src/app/resource/recurso-adicionar-cartao';
import { RecursoValidarNumero } from 'src/app/resource/cartao-credito/recurso-validar-numero';

@Component({
  selector: 'app-adicionar-cartao-credito',
  templateUrl: './adicionar-cartao-credito.component.html',
  styleUrls: ['./adicionar-cartao-credito.component.css']
})
export class AdicionarCartaoCreditoComponent implements OnInit {

  public clienteId: number = 1;
  public formularioCartao!: FormGroup;
  public bandeiras = bandeiras;

  public constructor(
    private readonly _fb: FormBuilder,
    public modalRef: MatDialogRef<AdicionarCartaoCreditoComponent>,
    protected readonly validar: RecursoValidarNumero,
    protected readonly adicionar: RecursoAdicionarCartao
  ) {}

  ngOnInit(): void {
    this.formularioCartao = this._fb.group({
      id: [null],
      numero: ['4350870204391514', Validators.required],
      titular: ['SAMUEL S TAVEIRA', [Validators.required, Validators.maxLength(64)]],
      validade: ['1226', Validators.required],
      bandeira: ['VISA', Validators.required],
      cvv: ['154', Validators.required]
    });
    this.adicionar.ok().subscribe(cartoesCriados => { this.modalRef.close() });
    this.validar.ok().subscribe(bandeira => {
      this.formularioCartao.controls['bandeira'].patchValue(bandeira.nome);
    });
    this.formularioCartao.controls['numero'].valueChanges.pipe(debounceTime(900)).subscribe(numero => {
      if(this.formularioCartao.controls['numero'].valid) { this.validar.executar(numero) }
    });
  }
}