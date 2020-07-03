package com.momentum.momentum.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity(name = "tb_contato")
public class Contato {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long contato_id;
	
	@Column(length = 100)
	@Size(min = 2, max = 100)
	@NotNull
	private String nome;
	
	@Size(min = 6, max = 100)
	@NotNull
	private String email;
	
	@Column(length = 100)
	@NotNull
	private long telefone;
	
	@Size(min = 2, max = 1000)
	@NotNull
	private String mensagem;

	public long getContato_id() {
		return contato_id;
	}

	public void setContato_id(long contato_id) {
		this.contato_id = contato_id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getTelefone() {
		return telefone;
	}

	public void setTelefone(long telefone) {
		this.telefone = telefone;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
}
