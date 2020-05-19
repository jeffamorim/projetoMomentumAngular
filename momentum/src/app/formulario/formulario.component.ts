import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

function validacao (){
  let nome = (<HTMLSelectElement>document.getElementById('nome')).value;
  let email = (<HTMLSelectElement>document.getElementById('email')).value;
  let senha = (<HTMLSelectElement>document.getElementById('senha')).value;
  let confirmaSenha = (<HTMLSelectElement>document.getElementById('confirmacaoSenha')).value; 
  let tamSenha = senha.length;
  let tamConfSenha = confirmaSenha.length;
  
  if (tamSenha > 6 || tamConfSenha > 6 && tamSenha != null || tamConfSenha != null) {
  if (senha == confirmaSenha) {
  document.writeln("Cadastro realizado");
  }
  else{
  document.writeln("As senhas não são iguais!");
  } 
  }
  else{
  alert("A senha deve ter no minimo 6 caracteres");
  }
  }
  
  document.getElementById('btnenviar').addEventListener('click',() =>{
  
  validacao();
  
  });
  
