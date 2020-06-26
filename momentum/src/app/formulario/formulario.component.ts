import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario: Usuario = new Usuario;

  confirmacao: Usuario = new Usuario;

  validaOk: boolean = true;

  senhaConfirmada: boolean = false;

  senhaTamanho: boolean = false;

  validaEmail: boolean = false;

  telefone: boolean = false;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  cadastrar() {

    if (this.usuario.senha != this.confirmacao.senha) {
      this.senhaConfirmada = true;
      this.validaOk = false;
    }

    if (this.usuario.senha.length < 6) {
      this.senhaTamanho = true
      this.validaOk = false
    }


    if (this.usuario.email.includes("@") == false) {
      this.validaEmail = true;
      this.validaOk = false;
    }

    if (this.usuario.telefone >= 10 && this.usuario.telefone < 12) {
      this.telefone = true
      this.validaOk = false
    }

    if (this.validaOk == true) {

      this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        alert('Agora faço login')
        this.router.navigate(['/entrar'])
      })
    }
  }

}



