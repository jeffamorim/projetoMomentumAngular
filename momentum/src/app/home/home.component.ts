import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: boolean = true

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("logado") == "true") {
      this.usuario = false
    }

  }

}
