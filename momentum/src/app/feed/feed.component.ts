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
  key = 'data_postagem'
  reverse = true

  constructor(private postagemService: PostagemService) {

  }

  ngOnInit(): void {
    this.findAllPostagem()
  }
    findAllPostagem() {
      this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
        this.listaPostagem = resp

      })
    }

    publicar() {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        location.assign('/feed')
      })
    }
}

