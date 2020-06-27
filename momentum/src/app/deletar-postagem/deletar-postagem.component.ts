import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar-postagem',
  templateUrl: './deletar-postagem.component.html',
  styleUrls: ['./deletar-postagem.component.css']
})
export class DeletarPostagemComponent implements OnInit {

  delOk: boolean = false
  postagem: Postagem = new Postagem();
  nome: string = localStorage.getItem('nome');

  constructor(private postagemService: PostagemService, private route: ActivatedRoute, private router: Router) { }

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
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o ID`)
    })
  }

  btnSim() {
    this.postagemService.deletePostagem(this.postagem.id).subscribe(() => {
      this.delOk = true
      this.router.navigate(['/feed'])
      localStorage.setItem('delOk', this.delOk.toString())
    })
  }

  btnNao() {
    this.router.navigate(['/feed'])
  }

}
