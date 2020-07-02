import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  faHeart = faHeart;

  constructor() { }

  ngOnInit(): void {


  }

  mensagem() {
    alert("Mensagem enviada")
    location.assign('/contato')
  }

}