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

  key = 'data_postagem';
  reverse = true;
  p: number = 1;
  pagina: boolean = false;
  nome: string;
  alerta: boolean = false

  constructor(private postagemService: PostagemService) {

  }

  ngOnInit() {
    this.findAllPostagem()
    this.nome = localStorage.getItem("usuario")
    let item: string = localStorage.getItem('delOk')

    if (item == "true") {
      this.alerta = true
      localStorage.removeItem('delOk')
      setTimeout(() => {
        location.assign('/feed')
      }, 2000)
    }
  }

  findAllPostagem() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
      if (this.listaPostagem.length > 10) {
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

