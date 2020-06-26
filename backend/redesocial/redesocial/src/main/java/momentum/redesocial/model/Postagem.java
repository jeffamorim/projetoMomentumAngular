package momentum.redesocial.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_publicacao")
public class Postagem {

	@Column(name = "cd_id_publicacao")
	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "nm_texto", nullable = false)
	@NotNull
	@Size(min = 5, max = 967)
	private String texto;
	
	@Column(name = "dt_data", nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date data = new java.sql.Date(System.currentTimeMillis());
	
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "cd_id_usuario", referencedColumnName = "cd_id_usuario")
	private Usuario cd_id_usuario;
	
	@Column(name = "ic_analise", nullable = false)
	@NotNull
	private Boolean analise;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public Usuario getCd_id_usuario() {
		return cd_id_usuario;
	}

	public void setCd_id_usuario(Usuario cd_id_usuario) {
		this.cd_id_usuario = cd_id_usuario;
	}

	public Boolean getAnalise() {
		return analise;
	}

	public void setAnalise(Boolean analise) {
		this.analise = analise;
	}
	
}
