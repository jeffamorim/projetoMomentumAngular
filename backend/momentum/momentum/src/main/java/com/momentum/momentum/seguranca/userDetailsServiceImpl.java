package com.momentum.momentum.seguranca;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.momentum.momentum.model.Usuario;
import com.momentum.momentum.repository.UsuarioRepository;


@Service
public class userDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UsuarioRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername (String username) throws UsernameNotFoundException{
		
		
		Optional<Usuario> user= userRepository.findAllByUsuario(username);
		
		user.orElseThrow (() -> new UsernameNotFoundException(username+"no found"));
		List<GrantedAuthority> authorityListAdmin = AuthorityUtils.createAuthorityList("ROLE_USER","ROLE_ADMIN");
	 	List<GrantedAuthority> authorityListUser = AuthorityUtils.createAuthorityList("ROLE_USER");
	 	return new User(user.get().getUsuario(),user.get().getSenha(), user.get().isAdmin() ? authorityListAdmin : authorityListUser);
	}
}
