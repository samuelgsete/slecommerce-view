import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { Cliente } from 'src/app/model/cliente.entity';

import { BuscarClienteService } from 'src/app/usecases/cliente/buscar-cliente.service';
import { EditarClienteService } from 'src/app/usecases/cliente/editar-cliente.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public formularioCliente!: FormGroup;
  public clienteId: number = 1;

  public constructor(
    private spinner: NgxSpinnerService,
    public readonly _fb: FormBuilder,
    public readonly buscar: BuscarClienteService,
    public readonly editar: EditarClienteService
  ) {}

  public carregarCliente(id: number): void {
    this.spinner.show();
    this.buscar.executar(id).subscribe(response => {   
      this.cliente = response;   
      this.formularioCliente.patchValue({
        id: this.cliente.id,
        nome: this.cliente.nome,
        sobrenome: this.cliente.sobrenome,
        email: this.cliente.email,
        telefone: this.cliente.telefone,
        cpf: this.cliente.cpf,
        estaAtivo: this.cliente.estaAtivo,
        registradoDesde: this.cliente.registradoDesde
      });
    }).add(() => {
      this.spinner.hide();
    })
  }

  public editarCliente(cliente: Cliente): void {
    const clienteAtualizado: Cliente = new Cliente({
      id: cliente.id,
      nome: cliente.nome,
      sobrenome: cliente.sobrenome,
      email: cliente.email,
      telefone: cliente.telefone,
      cpf: cliente.cpf,
      estaAtivo: cliente.estaAtivo,
      registradoDesde: cliente.registradoDesde
    })
    this.editar.executar(this.clienteId, clienteAtualizado).subscribe(response => {
      console.log(response);
      this.carregarCliente(this.clienteId);
    });
  }

  ngOnInit(): void {
    this.carregarCliente(this.clienteId);
    this.formularioCliente = this._fb.group({
      id: [null],
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      estaAtivo: [''],
      registradoDesde:['']
    });
  }
}