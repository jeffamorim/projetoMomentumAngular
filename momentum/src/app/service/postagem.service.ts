import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllPostagem() {
    return this.http.get('http://localhost:8080/postagem', this.token)
  }

  postPostagem(post: Postagem) {
    return this.http.post('http://localhost:8080/postagem', post, this.token)
  }

  putPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagem', postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/postagem/${id}`, this.token)
  }

  getByIdPostagem(id: number) {
    return this.http.get(`http://localhost:8080/postagem/${id}`, this.token)
  }

}
