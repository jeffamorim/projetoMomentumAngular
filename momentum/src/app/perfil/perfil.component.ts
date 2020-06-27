import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Depoimento } from '../model/Depoimento';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  nome: String = localStorage.getItem('nome');
  depoimento: Depoimento = new Depoimento();

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    let token = localStorage.getItem('token');

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
