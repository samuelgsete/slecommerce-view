import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

import { ImagemProduto } from 'src/app/model/imagem-produto.entity';
import { EnviarImagem } from 'src/app/usecases/imagem-produto/enviar-imagem.service';
import { RemoverImagemService } from 'src/app/usecases/imagem-produto/remover-imagem.service';

const PORCENTAGEM = 100;

@Component({
  selector: 'app-enviar-imagem',
  templateUrl: './enviar-imagem.component.html',
  styleUrls: ['./enviar-imagem.component.css']
})
export class EnviarImagemComponent implements OnInit {
  
  public imagens:ImagemProduto[] = [];
  public arquivos: any[] = [];
  public progresso: number = 0;
  public imagensSelecionadas: ImagemProduto[] = [];
  public contador = 0; // conta a quantidade de imagens selecionadas
  public maxUploads: boolean = true;

  public constructor(
    private readonly toastr: ToastrService, 
    private readonly enviarImg: EnviarImagem, 
    private readonly removerImg: RemoverImagemService
  ) {}

  public carregarImagem(evento: any) {
    const arquivo = evento.target.files[0];
    if(arquivo != undefined) {
      this.arquivos.push(arquivo);
      let formData = new FormData();
      formData.append('img', arquivo, arquivo.name);
      this.uploadImg(formData);
    }
  }

  public uploadImg(formData: FormData) {
    this.enviarImg.executar(formData).subscribe( (evento: any) => {
      if (evento.type === HttpEventType.UploadProgress)
        this.progresso = Math.round(PORCENTAGEM * evento.loaded/evento.total);
      else if(evento instanceof HttpResponse){
        let imagemAdicionada = evento.body;
        this.imagens.push(imagemAdicionada);
        this.imagens[0].imagemPrincipal = true;
        this.toastr.success('Upload concluído', 'Tudo ok!', { progressBar: true });
      }
    }, evento => {
      this.toastr.error(evento.error.mensagem, 'Algo deu errado!', { progressBar: true });
    }).add(() => {
      this.progresso = 0;
      this.arquivos = [];
    })
  }

  public onFileDropped(evento: any) {
    for(const arquivo of evento) {
      this.arquivos.push(arquivo);
      let formData = new FormData();;
      formData.append('img', arquivo, arquivo.name);
      this.uploadImg(formData)
    }
  }
  
  public selecionarImagem(selecionado: boolean, imagemSelecionada: ImagemProduto) {
    imagemSelecionada.estaSelecionada = selecionado;
    if(selecionado)
      this.contador++;
    else
      this.contador--;
  }

  public removerImagem(nomeImg: string, index: number) {
    Swal.fire({
      title: 'Tem certeza que deseja remover?',
      text: 'Você não poderá desfazer essa operação',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      this.imagens[index].estaRemovida = true;
      this.removerImg.executar(nomeImg).subscribe(response => {
        if(this.imagens[index].estaSelecionada) 
          this.contador--;
        this.imagens.splice(index, 1);
        if(this.imagens[0] != null)
          this.imagens[0].imagemPrincipal = true;
          this.toastr.info('Removido com sucesso', 'Tudo bem!', { progressBar: true });
      })
    })
  }

  public removerSelecionados() {
    Swal.fire({
      title: 'Tem certeza que deseja remover?',
      text: 'Você não poderá desfazer essa operação',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      let imagensSelecionadas = this.imagens.filter((imagem) => imagem.estaSelecionada == true);
      imagensSelecionadas.forEach(imagemSelecionada => {
        this.removerImg.executar(imagemSelecionada.nomeRandomico).subscribe(response => {
          let index = this.imagens.indexOf(imagemSelecionada);
          this.imagens[index].estaRemovida = false;
          this.imagens.splice(index, 1);
          this.contador = 0;
          this.toastr.info('Removido com sucesso', 'Tudo bem!', { progressBar: true });
          if(this.imagens[0] != null)
            this.imagens[0].imagemPrincipal = true;
        })
      })
    })
  }

  ngOnInit(): void {}
}