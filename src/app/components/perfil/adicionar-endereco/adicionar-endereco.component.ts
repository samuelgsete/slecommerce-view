import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";

import { Endereco } from 'src/app/model/endereco.entity';
import { AdicionarEnderecoService } from 'src/app/usecases/endereco/adicionar-endereco.service';
import { ConsultarCepService } from 'src/app/usecases/endereco/consultar-cep.service';

@Component({
  selector: 'app-adicionar-endereco',
  templateUrl: './adicionar-endereco.component.html',
  styleUrls: ['./adicionar-endereco.component.css']
})
export class AdicionarEnderecoComponent implements OnInit {

  public formularioEndereco!: FormGroup;
  public cep: FormControl = new FormControl('', { validators: Validators.required });

  public constructor(
    private readonly _fb: FormBuilder,
    public modalRef: MatDialogRef<AdicionarEnderecoComponent>,
    private spinner: NgxSpinnerService,
    private readonly adicionar: AdicionarEnderecoService,
    private readonly consultarCep: ConsultarCepService
  ) {}

  public fecharModal(): void {
    this.modalRef.close();
  }

  public adicionarEndereco(formulario: any): void {
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
    const clienteId = 1;
    this.adicionar.executar(clienteId, endereco).subscribe(response => {
      console.log(response);
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
  }
}