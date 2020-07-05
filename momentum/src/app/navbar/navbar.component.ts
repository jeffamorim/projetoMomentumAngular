import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  usuario: Usuario[]
  nomeUsuario: Usuario = new Usuario
  logado: boolean = false
  entrar: boolean = true
  inicio: boolean = false
  home: boolean = false
  nome: string
  admin: boolean = false


  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    if (localStorage.getItem("logado") == "true") {
      this.logado = true
      this.entrar = false
      this.nome = localStorage.getItem("usuario")
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.home = true
      }
      else if (event instanceof NavigationStart || this.location.path() == "/feed") {
        this.home = false
      }
    });

    if (localStorage.getItem("admin") == "true" && localStorage.getItem("logado") == "true") {
      this.admin = true
    }
  }

  estadoHome() {
    if (this.location.path() == "/home") {
      this.home = true
    }
    else {
      this.home = false
    }
  }

  sair() {
    localStorage.removeItem("token")
    localStorage.setItem("usuario", "")
    localStorage.setItem("logado", "false")
    localStorage.setItem("admin", "false")
    this.router.navigate(['/home']);
    this.logado = false
    this.entrar = true
    location.assign('/home')
  }

}
