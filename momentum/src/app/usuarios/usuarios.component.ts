import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios: Usuario[]

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {

    this.findAllUsuarios()

    let admin = localStorage.getItem('admin');

    if (admin == "false") {
      alert('Você não tem permissão para acessar essa área!')
      this.router.navigate(['/home']);
    }

    let token = localStorage.getItem("token")

    if (token == null) {
      alert('Você não está autenticada(o)! Faça o login antes de prosseguir.')
      this.router.navigate(['/entrar']);
    }

  }

  findAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe((resp: Usuario[]) => {
      this.listaUsuarios = resp
    })
  }

}
