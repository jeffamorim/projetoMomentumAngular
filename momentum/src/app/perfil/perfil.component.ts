import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario[]
  nomeUsuario: Usuario = new Usuario
  nome: string

  listaPostagem:Postagem[]

  key = 'data_postagem';
  reverse = true;
  p: number = 1;

  constructor(private router: Router, private postagemService: PostagemService) { }

  ngOnInit() {
    this.buscarPostagemUsuario()
    if (localStorage.getItem("logado") == "true") {
      this.nome = localStorage.getItem("usuario")
    }

    let token = localStorage.getItem("token")

    if (token == null) {
      alert('Você não está autenticada(o)! Faça o login antes de prosseguir.')
      this.router.navigate(['/entrar']);
    }
  }

  buscarPostagemUsuario() {
    this.postagemService.getAllByUser(localStorage.getItem("usuario")).subscribe((resp:Postagem[]) => {
      this.listaPostagem = resp
    })
  }

  btnSair() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }

}
