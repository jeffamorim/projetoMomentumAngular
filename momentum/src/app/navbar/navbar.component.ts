import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logado: boolean = false
  entrar : boolean = true

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("logado") == "true") {
      this.logado = true
      this.entrar = false
    }

  }

  sair() {
    localStorage.setItem("token", "");
    localStorage.setItem("usuario", "")
    localStorage.setItem("logado", "false")    
    this.router.navigate(['/home']);
    this.logado = false
    this.entrar = true
    location.assign('/home')
  }

}
