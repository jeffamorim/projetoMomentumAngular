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

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
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
    })
  }

  salvar() {
    this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      this.router.navigate(['/usuarios'])
    })
  }

}
