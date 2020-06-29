import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { UserLogin } from '../model/UserLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  user: UserLogin = new UserLogin


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logar() {

    function mostrarMensagemErro(mensagem) {
      let aviso = document.getElementById("aviso")
      aviso.innerHTML = mensagem
      aviso.style.visibility = "visible";
    }

    this.authService.login(this.user).subscribe((resp: UserLogin) => {
      this.user = resp;
      localStorage.setItem("token", resp.token);
      localStorage.setItem("usuario", resp.usuario)
      localStorage.setItem("logado", "true")
      this.router.navigate(['/feed']);
      location.assign('/feed')
    }, err => {
      mostrarMensagemErro("Houve um erro ao tentar entrar, verifique o usuario e senha fornecidos e tente novamente!")
    })
  }

}
