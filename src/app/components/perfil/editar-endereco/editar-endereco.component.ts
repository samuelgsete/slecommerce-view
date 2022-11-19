import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";

import { Endereco } from 'src/app/model/endereco.entity';
import { ConsultarCepService } from 'src/app/usecases/endereco/consultar-cep.service';
import { EditarEnderecoService } from 'src/app/usecases/endereco/editar-endereco.service';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {

  public formularioEndereco!: FormGroup;
  public cep: FormControl = new FormControl('', { validators: Validators.required });

  public constructor(
    private readonly _fb: FormBuilder,
    public modalRef: MatDialogRef<EditarEnderecoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private spinner: NgxSpinnerService,
    private readonly editar: EditarEnderecoService,
    private readonly consultarCep: ConsultarCepService
  ) {}

  public fecharModal(): void {
    this.modalRef.close();
  }

  public editarEndereco(formulario: any): void {
    this.spinner.show();
    const endereco = new Endereco({
      id: formulario.id,
      rua: formulario.rua,
      numero: formulario.numero,
      cep: this.cep.value,
      bairro: formulario.bairro,
      municipio: formulario.municipio,
      uf: formulario.uf,
      destinatario: formulario.destinatario,
      telefone: formulario.telefone,
      enderecoPadrao: formulario.enderecoPadrao
    })
    this.editar.executar(endereco.id, endereco).subscribe(response => {
    }).add(() => {
      this.spinner.hide();
      this.fecharModal();
    })
  }

  public verificarCep(cep: string): void {
    this.consultarCep.executar(cep).subscribe(response => { 
      this.formularioEndereco.patchValue({
        id: null,
        rua: response.logradouro,
        bairro: response.bairro,
        municipio: response.localidade,
        uf: response.uf
      });
    });
  }

  public construirFormulario(endereco: Endereco): void {
    this.formularioEndereco.patchValue({
      id: endereco.id,
      rua: endereco.rua,
      numero: endereco.numero,
      bairro: endereco.bairro,
      municipio: endereco.municipio,
      uf: endereco.uf,
      destinatario: endereco.destinatario,
      telefone: endereco.telefone,
      enderecoPadrao: endereco.enderecoPadrao
    });
    this.cep.patchValue(endereco.cep);
  }

  ngOnInit(): void {
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
    this.construirFormulario(this.data);
  }
}