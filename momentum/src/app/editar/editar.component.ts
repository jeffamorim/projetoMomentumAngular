import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario: Usuario = new Usuario;
  senha: String;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    this.findById(id)

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

  confirmaSenha(event: any) {
    this.senha = event.target.value;
  }

  findById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  salvar() {

    function mostrarMensagemErro(mensagem) {
      let aviso = document.getElementById("aviso")
      aviso.innerHTML = mensagem
      aviso.style.visibility = "visible";
    }

    function esconderMensagemErro() {
      document.getElementById("aviso").style.visibility = "hidden";
    }

    function mostrarMensagemSucesso(mensagem) {
      let aviso = document.getElementById("aviso")
      aviso.innerHTML = mensagem
      aviso.style.visibility = "visible";
      aviso.className = "alert alert-success text-center mt-3"
    }

    let usuario = this.usuario.usuario;
    let nome = this.usuario.nome;
    let email = this.usuario.email;
    let senha = this.usuario.senha;

    if (!(nome == null) && !(email == null) && !(senha == null) && !(usuario == null)) {
      if (senha != this.senha) {
        mostrarMensagemErro("Senhas não compatíveis!")
        return false;
      }
      else if (usuario.length < 2) {
        mostrarMensagemErro("Formato Inválido! O comprimento mínimo do usuario é de 2 caracteres.")
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
        mostrarMensagemSucesso("Usuario alterado com sucesso!")
      }
    }
    else {
      mostrarMensagemErro("Erro no fornecimento de dados! Preencha os campos obrigatórios! *")
      return false;
    }

    this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      setTimeout(() => {
        this.router.navigate(['/usuarios'])
      }, 2000)
    })
  }

  voltar() {
    this.router.navigate(['/usuarios'])
  }

}
