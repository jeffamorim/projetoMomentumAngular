import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-postagem',
  templateUrl: './excluir-postagem.component.html',
  styleUrls: ['./excluir-postagem.component.css']
})
export class ExcluirPostagemComponent implements OnInit {

  delOk: boolean = false
  postagem: Postagem = new Postagem();
  nome: string = localStorage.getItem('nome');

  constructor(private postagemService: PostagemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    let id: number = this.route.snapshot.params['id']
    this.findById(id)

    let admin = localStorage.getItem('admin');

    if (admin == "false") {
      alert('Você não tem permissão para acessar essa área!')
      this.router.navigate(['/home']);
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
    this.postagemService.deletePostagem(this.postagem.id_postagem).subscribe(() => {
      this.delOk = true
      this.router.navigate(['/feed'])
      localStorage.setItem('delOk', this.delOk.toString())
    })
  }

  btnNao() {
    this.router.navigate(['/feed'])
  }

}
