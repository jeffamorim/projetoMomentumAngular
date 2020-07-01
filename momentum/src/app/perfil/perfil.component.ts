import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem'
import { Depoimento } from '../model/Depoimento';
import { DepoimentoService } from '../service/depoimento.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario[]
  nomeUsuario: Usuario = new Usuario
  nome: string
  depoimento: Depoimento = new Depoimento();
  aviso: boolean = false

  listaPostagem: Postagem[]

  key = 'data_postagem';
  reverse = true;
  p: number = 1;

  constructor(private router: Router, private postagemService: PostagemService, private depoimentoService: DepoimentoService) { }

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
    this.postagemService.getAllByUser(localStorage.getItem("usuario")).subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
    })
  }

  compartilhar() {
    this.depoimentoService.postDepoimento(this.depoimento).subscribe((resp: Depoimento) => {
      this.depoimento = resp;
      this.aviso = true
      setTimeout(() => {
        location.assign('/perfil')
      }, 3000);
    })
  }

}
