import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario : Usuario[]
  nomeUsuario : Usuario = new Usuario
  nome : string

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("logado") == "true"){
      this.nome = localStorage.getItem("usuario")
    }
  }

}
