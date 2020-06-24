import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http:HttpClient) { 
    
  }
  getAllPostagem(){
    return this.http.get('http://localhost:8080/postagem')
  }

  postPostagem(post:Postagem){
    return this.http.post('http://localhost:8080/postagem', post)
  }

}
