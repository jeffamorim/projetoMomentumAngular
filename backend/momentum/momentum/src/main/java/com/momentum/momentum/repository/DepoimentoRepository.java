package com.momentum.momentum.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.momentum.momentum.model.Depoimento;


@Repository
public interface DepoimentoRepository extends JpaRepository<Depoimento, Long> {
	
	public List<Depoimento> findAllByTituloContainingIgnoreCase (String titulo);
	
}
