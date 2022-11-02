import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { AtualizarEstoqueService } from 'src/app/usecases/produto/atualizar-estoque.service';

@Component({
  selector: 'app-atualizar-estoque',
  templateUrl: './atualizar-estoque.component.html',
  styleUrls: ['./atualizar-estoque.component.css']
})
export class AtualizarEstoqueComponent implements OnInit {

  public estoque!: FormControl;
  public progresso: boolean = false;

  public constructor(
    private readonly toastr: ToastrService,
    private readonly atualizar: AtualizarEstoqueService,
    public modalRef: MatDialogRef<AtualizarEstoqueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  public fecharModal(): void {
    this.modalRef.close();
  }

  public atualizarEstoque() {
    this.progresso = true;
    const produtoId = this.data.produto.id;
    const estoqueAtualizado = this.estoque.value;
    this.atualizar.executar(produtoId, estoqueAtualizado).subscribe(response => {
      this.data.produto = response;
      this.toastr.success('Atualizado com sucesso', 'Tudo Ok!', { progressBar: true }); 
      this.modalRef.close();
    }, eventErr => {
      console.log(eventErr);
    }).add(() => {
      this.progresso = false;
    })
  }

  ngOnInit(): void {
    this.estoque = new FormControl(this.data.produto.estoque, {
      validators: Validators.required
    });
  }
}