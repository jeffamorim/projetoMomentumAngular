package momentum.redesocial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import momentum.redesocial.model.Usuario;


public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}
