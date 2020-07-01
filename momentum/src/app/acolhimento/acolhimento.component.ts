import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from '../service/depoimento.service';
import { Depoimento } from '../model/Depoimento';

@Component({
  selector: 'app-acolhimento',
  templateUrl: './acolhimento.component.html',
  styleUrls: ['./acolhimento.component.css']
})
export class AcolhimentoComponent implements OnInit {

  listaDepoimento: Depoimento[]
  depoimento: Depoimento = new Depoimento();
  titulo: string

  key = 'data';
  reverse = true;
  p: number = 1;
  pagina: boolean = false;
  botao: boolean = false;

  constructor(private depoimentoService: DepoimentoService) { }

  ngOnInit() {
    this.findAllDepoimentos();
    let admin = localStorage.getItem('admin')
    if (admin == "true") {
      this.botao = true;
    }
  }

  findAllDepoimentos() {
    this.depoimentoService.getAllDepoimentos().subscribe((resp: Depoimento[]) => {
      this.listaDepoimento = resp;
      if (this.listaDepoimento.length > 3) {
        this.pagina = true
      }
    })
  }

  // excluirDepoimento() {
  //   let id_depoimento = parseInt(localStorage.getItem('id_depoimento'));
  //   this.depoimentoService.deleteDepoimento(id_depoimento).subscribe(() => {
  //     alert("Depoimento excluído com sucesso!")
  //     location.assign('/acolhimento')
  //   })
  // }

  pesquisarPorTitulo() {
    this.depoimentoService.findByTitulo(this.titulo).subscribe((resp: Depoimento[]) => {
      this.listaDepoimento = resp
    })
  }

}
