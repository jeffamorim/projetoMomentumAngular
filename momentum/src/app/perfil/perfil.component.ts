import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario[]
  nomeUsuario: Usuario = new Usuario
  nome: string


  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("logado") == "true") {
      this.nome = localStorage.getItem("usuario")
    }

    let token = localStorage.getItem("token")

    if (token == null) {
      alert('Você não está autenticada(o)! Faça o login antes de prosseguir.')
      this.router.navigate(['/entrar']);
    }
  }

  btnSair() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }

}
