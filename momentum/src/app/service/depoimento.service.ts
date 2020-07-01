import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Depoimento } from '../model/Depoimento';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  constructor(private http: HttpClient) { }

  getAllDepoimentos() {
    return this.http.get('http://localhost:8080/depoimento')
  }

  postDepoimento(depoimento: Depoimento) {
    return this.http.post('http://localhost:8080/depoimento', depoimento, this.token)
  }

  deleteDepoimento(id: number) {
    return this.http.delete(`http://localhost:8080/depoimento/${id}`, this.token)
  }

  findByTitulo(titulo: string) {
    return this.http.get(`http://localhost:8080/depoimento/titulo/${titulo}`)
  }

}
