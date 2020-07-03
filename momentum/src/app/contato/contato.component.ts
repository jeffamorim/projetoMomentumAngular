import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/Contato';
import { ContatoService } from '../service/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato: Contato = new Contato

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {

  }
  enviar() {
    this.contatoService.postContato(this.contato).subscribe((resp: Contato) => {
      this.contato = resp;
      alert('Mensagem enviada!')
      location.assign('/contato')
    }, (erro) => {
      alert("Algum dado invalido!")
    })
  }

}