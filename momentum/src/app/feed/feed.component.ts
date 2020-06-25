import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem'
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagem: Postagem[]
  postagem: Postagem = new Postagem


  key = 'data'
  reverse = true

  constructor(private postagemService: PostagemService) { }

  alerta: boolean = false

  ngOnInit() {
    this.findAllPostagem()
    let item: string = localStorage.getItem('delOk')
    if (item == 'true') {
      this.alerta = true
      localStorage.clear()

      setTimeout(() => {
        location.assign('/feed')
      }, 3000)
    }
  }

  findAllPostagem() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
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

