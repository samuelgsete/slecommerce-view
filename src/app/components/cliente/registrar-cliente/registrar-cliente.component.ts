import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

import { Cliente } from 'src/app/model/cliente.entity';
import { RegistrarClienteService } from 'src/app/usecases/cliente/registrar-cliente.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  public formularioCliente!: FormGroup;

  public vantagens: string[] = [
    'Faça pagamentos de forma segura',
    'Utilize o tipo de pagamento que desejar',
    'Acesse as melhores ofertas',
    'Acompanhe a entrega de seus pedidos',
    'Recebe suporte diretamente do vendedor',
    'Obtenha descontos exclusivos',
    'Utilize mais de um endereço de entrega',
    'Cancele seus pedidos gratuitamente a qualquer momento'
  ]

  public constructor(
    private readonly router: Router,
    private readonly _fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private readonly toastr: ToastrService,
    private readonly registrar: RegistrarClienteService,
  ) {}

  public registrarCliente(formulario: any): void {
    this.spinner.show();
    const novoCliente = new Cliente({
      id: null,
      nome: formulario.nome,
      sobrenome: formulario.sobrenome,
      cpf: formulario.cpf,
      email: formulario.email,
      usuario: formulario.usuario,
      senha: formulario.senha
    });

    this.registrar.executar(novoCliente).subscribe(response => {
      this.toastr.success('Cadastrado com sucesso', 'Tudo Ok!', { progressBar: true });
      this.router.navigateByUrl('/catalogo/ver');
    },
    err => {
      console.log(err);
    }).add(() => {
      this.spinner.hide();      
    })
  }

  ngOnInit(): void {
    this.formularioCliente = this._fb.group({
      nome: ['Sharles', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      sobrenome: ['Chagas', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['sharleschagas@hotmail.com', [Validators.required, Validators.email]],
      telefone: ['85988412935', [Validators.required]],
      cpf: ['64592129722', [Validators.required]],
      usuario: ['sharlesgsete', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      senha: ['123456', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      termosUso: [true, Validators.required]
    });
  }
}