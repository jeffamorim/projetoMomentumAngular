package momentum.redesocial.controller;

import java.util.List;
import java.util.Optional;

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

import momentum.redesocial.model.Usuario;
import momentum.redesocial.model.UsuarioLogado;
import momentum.redesocial.model.UsuarioLogin;
import momentum.redesocial.repository.UsuarioRepository;
import momentum.redesocial.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioController {

		@Autowired
		private UsuarioRepository repository;
		
		@Autowired
		private UsuarioService usuarioService;
		
		@GetMapping
		public ResponseEntity<List<Usuario>> GetAll() {
			return ResponseEntity.ok(repository.findAll());
		}
		
		@GetMapping("/{id}")
		public ResponseEntity<Usuario> GetById(@PathVariable long id) {
			return repository.findById(id)
					.map(resp -> ResponseEntity.ok(resp))
					.orElse(ResponseEntity.notFound().build());
		}
		
		@PostMapping
		public ResponseEntity<Usuario> postUsuario(@RequestBody Usuario usuario) {
			return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.CadastrarUsuario(usuario));
		}
		
		@PutMapping
		public ResponseEntity<Usuario> putUsuario(@RequestBody Usuario usuario) {
			return ResponseEntity.status(HttpStatus.OK).body(usuarioService.CadastrarUsuario(usuario));
		}
		
		@DeleteMapping("/{id}")
		public void deleteUsuario(@PathVariable long id) {
			repository.deleteById(id);
		}
		
		@PostMapping("/login")
		public ResponseEntity<Object> Logar(@RequestBody UsuarioLogin usuarioLogin) {
			Optional<UsuarioLogado> usuarioLogado = usuarioService.Logar(usuarioLogin);
			
			if(usuarioLogado.isPresent()) {
				return ResponseEntity.ok(usuarioLogado.get());
			}
			
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Acesso não autorizado!");
			
		}
		
}
