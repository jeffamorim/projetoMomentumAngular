import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  postUsuarioLogin(usuarioLogin: UsuarioLogin) {
    return this.http.post(`http://localhost:8080/usuarios/login`, usuarioLogin);
  }

  esconder() {
    let ok = false
    let token = localStorage.getItem('token')

    if (token != null) {
      ok = true
    }
    return ok;
  }

  esconderNav() {
    let ok = false
    let token = localStorage.getItem('token')

    if (token == null) {
      ok = true
    }
    return ok;
  }

}
