package com.momentum.momentum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.momentum.momentum.model.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long> {
	
	
	
}
