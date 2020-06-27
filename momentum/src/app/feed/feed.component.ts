import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem'
import { PostagemService } from '../service/postagem.service';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagem: Postagem[]
  postagem: Postagem = new Postagem
  usuario: Usuario = new Usuario;


  key = 'data'
  reverse = true

  constructor(private postagemService: PostagemService, private router: Router) { }

  alerta: boolean = false
  nome: String = localStorage.getItem('nome');

  ngOnInit() {
    let token = localStorage.getItem('token');

    if (token == null) {
      alert('Você não está autenticada(o)! Faça o login antes de prosseguir.')
      this.router.navigate(['/entrar']);
    }

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

