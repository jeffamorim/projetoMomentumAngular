import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id']
    this.findById(id)

    let token = localStorage.getItem('token');

    if (token == null) {
      alert('Você não está autenticada(o)! Faça o login antes de prosseguir.')
      this.router.navigate(['/entrar']);
    }

  }

  findById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o ID`)
    })
  }

  btnSim() {
    this.usuarioService.deleteUsuario(this.usuario.id).subscribe(() => {
      this.router.navigate(['/usuarios'])
    })
  }

  btnNao() {
    this.router.navigate(['/usuarios'])
  }

}
