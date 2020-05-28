import { Component, OnInit } from '@angular/core';
import { Validacao } from '../validacao';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  validacao: Validacao;
  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {

  }

  cadastrar() {

    let nome = this.usuario.nome;
    let email = this.usuario.email;
    let senha = this.usuario.senha;
    let confirmaSenha = this.usuario.confirmaSenha;

    if (senha.length > 9 && nome.length >= 2 && email.includes('@')) {
      if (senha === confirmaSenha) {
        console.log("Cadastrado com Sucesso!")
      }

      else {
        console.log("Errado")
        return false;
      }

    }
    else {
      return false;
    }

    console.log(this.usuario);

    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.router.navigate(['/usuarios']);
    });
  }


}



