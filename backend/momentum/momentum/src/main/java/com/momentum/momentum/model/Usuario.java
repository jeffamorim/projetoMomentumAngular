package com.momentum.momentum.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;

@Entity
@Table(name="tb_usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long user_id;
	
	@Column(unique = true, length = 100, nullable = false)
	@Size(min = 2, max = 100)
	@NotNull
	private String usuario;
	
	@Size(min = 6, max = 100, message = "Senha: mínimo de 6 caracteres")
	@NotNull
	private String senha;
	
	@Size(min = 2, max = 100, message = "Nome: mínimo de 2 caracteres")
	@NotNull
	private String nome;
	
	@Size(min = 6, max = 100, message = "Email: mínimo de 6 caracteres")
	@NotNull
	@Email
	private String email;
	
	
	@Column(length = 100)
	private String telefone;

	
	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
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

	
	public long getUser_id() {
		return user_id;
	}


}