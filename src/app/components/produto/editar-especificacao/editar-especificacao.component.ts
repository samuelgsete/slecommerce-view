import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Especificacao } from 'src/app/model/especificacao.entity';
import { DeletarEspecificacaoProdutoService } from 'src/app/usecases/especificacao/deletar-especificacao-produto.service';


@Component({
  selector: 'app-editar-especificacao',
  templateUrl: './editar-especificacao.component.html',
  styleUrls: ['./editar-especificacao.component.css']
})
export class EditarEspecificacaoComponent implements OnInit {

  public formulario!: FormGroup;
  @Input() public especificacoes: Especificacao[] = [];
  public contador: number = 0;

  @ViewChild('inputnome')
  public nome!: ElementRef;

  public constructor(
    private readonly _fb: FormBuilder,
    private readonly deletarEspecificacao: DeletarEspecificacaoProdutoService
  ) {}

  public adicionarEspecificacao(especificacao: any) {
    const novaEspecificacao = new Especificacao({
      id: null,
      nome: especificacao.nome,
      valor: especificacao.valor,
      selecionado: false,
      removido: false,
    });
    this.especificacoes.push(novaEspecificacao);
    this.formulario.reset();
    this.nome.nativeElement.focus();
  }

  public selecionar(selecionado: boolean, especificacao: Especificacao) {
    especificacao.selecionado = selecionado;
    if(selecionado)
      this.contador++;
    else
      this.contador--;
  }

  public removerSelecionados() {
    const especificacoesSelecionadas = this.especificacoes.filter(especificacao => especificacao.selecionado == true);
    especificacoesSelecionadas.forEach(especificacaoSelecionada => {
      this.deletarEspecificacao.executar(especificacaoSelecionada.id).subscribe(response => {
        const index = this.especificacoes.indexOf(especificacaoSelecionada);
        this.especificacoes.splice(index, 1);
        this.contador--;
      });
    });
  }

  ngOnInit(): void {
    this.formulario = this._fb.group({
      id: [null],
      nome: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      valor: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(60)]]
    });
  }
}