package com.momentum.momentum.seguranca;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
		return user.map(UserDetailsImpl::new).get();
	}
}
