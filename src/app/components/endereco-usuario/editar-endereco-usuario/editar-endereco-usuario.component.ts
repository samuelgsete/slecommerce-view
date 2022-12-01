import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RecursoEditarEndereco } from 'src/app/resource/endereco/recurso-editar-endereco';
import { RecursoVerificarCep } from 'src/app/resource/endereco/recurso-verificar-cep';

@Component({
  selector: 'app-editar-endereco-usuario',
  templateUrl: './editar-endereco-usuario.component.html',
  styleUrls: ['./editar-endereco-usuario.component.css']
})
export class EditarEnderecoUsuarioComponent implements OnInit {

  public formularioEndereco!: FormGroup;
  public cep: FormControl = new FormControl('', { validators: Validators.required });

  public constructor(
    protected readonly _fb: FormBuilder,
    protected modalRef: MatDialogRef<EditarEnderecoUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public endereco: any,
    protected editar: RecursoEditarEndereco,
    protected verificarCep: RecursoVerificarCep
  ) {}

  ngOnInit(): void {
    this.formularioEndereco = this._fb.group({
      id: [this.endereco.id],
      rua: [this.endereco.rua, [Validators.required, Validators.maxLength(64)]],
      numero: [this.endereco.numero, Validators.required],
      bairro: [this.endereco.bairro, [Validators.required, Validators.maxLength(64)]],
      municipio: [this.endereco.municipio, [Validators.required, Validators.maxLength(64)]],
      uf: [this.endereco.uf, [Validators.required, Validators.maxLength(2)]],
      destinatario: [this.endereco.destinatario, [Validators.required, Validators.maxLength(64)]],
      telefone: [this.endereco.telefone, Validators.required],
      enderecoPadrao: [this.endereco.enderecoPadrao, Validators.required]
    });
    this.cep.patchValue(this.endereco.cep)
    this.editar.ok().subscribe(resposta => { this.modalRef.close() })
  }
}