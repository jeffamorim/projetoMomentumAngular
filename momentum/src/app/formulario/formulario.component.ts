import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar() {

    function mostrarMensagemErro(mensagem) {
      let teste = document.getElementById("teste")
      teste.innerHTML = mensagem
      teste.style.visibility = "visible";
    }

    function esconderMensagemErro() {
      document.getElementById("teste").style.visibility = "hidden";
    }

    let nome = this.usuario.nome;
    let email = this.usuario.email;
    let senha = this.usuario.senha;
    let confirmaSenha = this.usuario.confirmaSenha;
    let data = this.usuario.dtNascimento;

    if (!(nome == null) && !(email == null) && !(senha == null) && !(data == null)) {
      if (senha != confirmaSenha) {
        mostrarMensagemErro("Senhas não compatíveis!")
        return false;
      }
      else if (nome.length < 2) {
        mostrarMensagemErro("Formato Inválido! O comprimento mínimo do nome é de 2 caracteres.")
        return false;
      }
      else if (!(email.endsWith(".com"))) {
        mostrarMensagemErro("Formato Inválido! O email deve conter @ e uma terminação válida como (.com), (.net), etc")
        return false;
      }
      else if (senha.length < 6) {
        mostrarMensagemErro("Formato Inválido! O comprimento mínimo da senha é de 6 caracteres.")
        return false;
      }
      else {
        console.log("Correto!")
        esconderMensagemErro()
      }
    }
    else {
      mostrarMensagemErro("Erro no fornecimento de dados! Preencha os campos obrigatórios! *")
      return false;
    }

    console.log(this.usuario);

    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.router.navigate(['/usuarios'])
    });
  }

}



