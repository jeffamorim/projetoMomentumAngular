package com.momentum.momentum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.momentum.momentum.model.Postagem;
import com.momentum.momentum.repository.PostagemRepository;

@RestController
@RequestMapping("/postagem")
@CrossOrigin("*")
public class PostagemController {
	
	@Autowired
	private PostagemRepository pr;
	
	@GetMapping
	public ResponseEntity<List<Postagem>> GetAllPostagens(){
		return ResponseEntity.ok(pr.findAll());
	}
	
	@PostMapping
	public ResponseEntity<Postagem> PostPostagem(@RequestBody Postagem postagem){
		return ResponseEntity.status(HttpStatus.CREATED).body(pr.save(postagem));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Postagem> GetById(@PathVariable long id){
		return pr.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/busca/{texto}")
	public ResponseEntity<List<Postagem>> GetByTexto(@PathVariable String texto){
		return ResponseEntity.ok(pr.findAllByTextoPostagemContainingIgnoreCase(texto));
	}
	
	@PutMapping
	public ResponseEntity<Postagem> PutPostagem(@RequestBody Postagem postagem){
		return ResponseEntity.status(HttpStatus.CREATED).body(pr.save(postagem));
	}
	
	@DeleteMapping("/{id}")
	public void deletePostagem(@PathVariable long id) {
		pr.deleteById(id);
	}
	
}
