import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { RecursoAdicionarEndereco } from 'src/app/resource/endereco/recurso-adicionar-endereco';
import { RecursoVerificarCep } from 'src/app/resource/endereco/recurso-verificar-cep';

@Component({
  selector: 'app-adicionar-endereco-usuario',
  templateUrl: './adicionar-endereco-usuario.component.html',
  styleUrls: ['./adicionar-endereco-usuario.component.css']
})
export class AdicionarEnderecoUsuarioComponent implements OnInit {

  public clienteId: number = 1;
  public formularioEndereco!: FormGroup;
  public cep: FormControl = new FormControl('', { validators: Validators.required });

  public constructor(
    protected readonly _fb: FormBuilder,
    protected modalRef: MatDialogRef<AdicionarEnderecoUsuarioComponent>,
    protected adicionar: RecursoAdicionarEndereco,
    protected verificarCep: RecursoVerificarCep
  ) {}

  ngOnInit(): void {
    this.adicionar.ok().subscribe(resposta => { this.modalRef.close() })
    this.formularioEndereco = this._fb.group({
      id: [null],
      rua: ['', [Validators.required, Validators.maxLength(64)]],
      numero: ['', Validators.required],
      bairro: ['', [Validators.required, Validators.maxLength(64)]],
      municipio: ['', [Validators.required, Validators.maxLength(64)]],
      uf: ['', [Validators.required, Validators.maxLength(2)]],
      destinatario: ['', [Validators.required, Validators.maxLength(64)]],
      telefone: ['', Validators.required],
      enderecoPadrao: [true, Validators.required]
    });
  }
}