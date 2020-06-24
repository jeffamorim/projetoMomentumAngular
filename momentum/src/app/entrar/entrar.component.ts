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
    this.authService.login(this.user).subscribe((resp: UserLogin) => {
      this.user = resp;
      localStorage.setItem("token", resp.token);
      localStorage.setItem("usuario", resp.usuario)
      localStorage.setItem("logado", "true")


      this.router.navigate(['/feed']);
      location.assign('/feed')
    }, (erro) => {
      alert("Usuário ou senha inválidos")
    })
  }


}
