package com.momentum.momentum.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_depoimento")
public class Depoimento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cd_id", nullable = false)
	private long id;
	
	@Size(min = 5, max = 100)
	@Column(name = "nm_gatilho", nullable = true, length = 100)
	private String gatilho;
	
	@NotNull
	@Size(min = 5, max = 100)
	@Column(name = "nm_titulo", nullable = false, length = 100)
	private String titulo;
	
	@NotNull
	@Size(min = 10, max = 1000)
	@Column(name = "nm_texto", nullable = false, length = 1000)
	private String texto;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "dt_data")
	private Date data = new java.sql.Date(System.currentTimeMillis());

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getGatilho() {
		return gatilho;
	}

	public void setGatilho(String gatilho) {
		this.gatilho = gatilho;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

}
