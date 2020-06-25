import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens');
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagens', postagem)
  }

  putPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagens', postagem)
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/postagens/${id}`)
  }

  getByIdPostagem(id: number) {
    return this.http.get(`http://localhost:8080/postagens/${id}`)
  }
}
