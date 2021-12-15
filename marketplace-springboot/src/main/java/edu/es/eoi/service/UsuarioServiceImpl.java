package edu.es.eoi.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.es.eoi.dto.UsuarioDto;
import edu.es.eoi.entity.Usuario;
import edu.es.eoi.repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl {

	@Autowired
	UsuarioRepository repoUsuario;

	public List<UsuarioDto> findAll() {

		List<Usuario> usuarios = repoUsuario.findAll();
		List<UsuarioDto> listaUsuarios = new ArrayList<UsuarioDto>();

		for (Usuario usuario : usuarios) {

			UsuarioDto dto = new UsuarioDto();
			BeanUtils.copyProperties(usuario, dto);

			listaUsuarios.add(dto);

		}

		return listaUsuarios;
	}
	
	public void save(UsuarioDto dto){

		Usuario usuario = new Usuario();
		BeanUtils.copyProperties(dto, usuario);

		repoUsuario.save(usuario);

	}
	
	public UsuarioDto find(int id){

		Usuario usuario = repoUsuario.findById(id).get();

		UsuarioDto dto = new UsuarioDto();

		BeanUtils.copyProperties(usuario, dto);

		return dto;
	}

	public boolean validateUser(UsuarioDto dto) {
		List<Usuario> usuariosEncontrados = repoUsuario.findByNombreAndPassword(dto.getNombre(), dto.getPassword());
		
		if(usuariosEncontrados!= null && usuariosEncontrados.size()>0) {
			return true;
		} else {
			return false;
		}
		
	}

}
