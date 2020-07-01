package com.momentum.momentum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.momentum.momentum.model.Depoimento;
import com.momentum.momentum.repository.DepoimentoRepository;

@Controller
@RequestMapping("/depoimento")
@CrossOrigin("*")
public class DepoimentoController {
	
	@Autowired
	private DepoimentoRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Depoimento>> getAllDepoimentos() {
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/titulo/{titulo}")
	public ResponseEntity<List<Depoimento>> getDepoimentoByTitulo(@PathVariable String titulo) {
		return ResponseEntity.ok(repository.findAllByTituloContainingIgnoreCase(titulo));
	}
	
	@PostMapping
	public ResponseEntity<Depoimento> postDepoimento(@RequestBody Depoimento depoimento) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(depoimento));
	}
	
	@PutMapping
	public ResponseEntity<Depoimento> putDepoimento(@RequestBody Depoimento depoimento) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(depoimento));
				
	}
	
	@DeleteMapping("/{id}")
	public void deleteDepoimento(@PathVariable long id) {
		repository.deleteById(id);
	}
	
}
