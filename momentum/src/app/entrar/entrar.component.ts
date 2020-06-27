import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logar() {

    function mostrarMensagemErro(mensagem) {
      let aviso = document.getElementById("aviso")
      aviso.innerHTML = mensagem
      aviso.style.visibility = "visible";
    }

    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp
      localStorage.setItem('token', this.usuarioLogin.token)
      localStorage.setItem('id', this.usuarioLogin.codigo)
      this.router.navigate(['/perfil'])
    }, err => {
      mostrarMensagemErro("Houve um erro ao tentar entrar, verifique o email e senha fornecidos e tente novamente!")
    });
  }


}
