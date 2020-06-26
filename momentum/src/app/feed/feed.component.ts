import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagem: Postagem[]
  postagem: Postagem = new Postagem

  //A linhas comentadas foram para testar em outra API
  key = 'data_postagem';
  reverse = true;
  p : number = 1;
  pagina: boolean = false;
  nome : string;

  constructor(private postagemService: PostagemService) {

  }

  ngOnInit(): void {
    this.findAllPostagem()
    this.nome = localStorage.getItem("usuario")
  }
    findAllPostagem() {
      this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
        this.listaPostagem = resp
        if(this.listaPostagem.length > 10) {
          this.pagina = true;
        }
      })
    }

    publicar() {
      this.postagem.usuario = localStorage.getItem("usuario")
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        location.assign('/feed')
      })
    }
}

