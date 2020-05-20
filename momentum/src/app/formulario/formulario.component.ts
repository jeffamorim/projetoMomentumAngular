import { Component, OnInit } from '@angular/core';
import { Validacao } from '../validacao';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  validacao: Validacao;

  constructor() { }

  ngOnInit() {

    this.validacao = new Validacao();

  }

  onSubmit() {

    let nome = this.validacao.nome.length;
    let email = this.validacao.email.length;
    let senha = this.validacao.senha;
    let confSenha = this.validacao.confirmarSenha;
    let comprSenha = this.validacao.senha.length;

    if (comprSenha > 9) {
      if (senha === confSenha) {
        console.log("Passou")
      }

      else {
        console.log("Errado")
        return false;
      }

    }
    else {
      return false;
    }

    console.log(this.validacao);
  }


}



