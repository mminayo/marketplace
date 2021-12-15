package edu.es.eoi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.es.eoi.dto.UsuarioDto;
import edu.es.eoi.service.UsuarioServiceImpl;

@RestController
@RequestMapping(value = "marketplace/usuario")
public class UsuarioController {

	@Autowired
	UsuarioServiceImpl serviceUsuario;

	@GetMapping
	public ResponseEntity<List<UsuarioDto>> getAll() {

		return new ResponseEntity<List<UsuarioDto>>(serviceUsuario.findAll(), HttpStatus.OK);

	}

	@PutMapping("/{id}")
	public ResponseEntity<String> updateOne(@RequestBody UsuarioDto dto, @PathVariable Integer id) {

		if (id.equals(dto.getId()) && serviceUsuario.find(id) != null) {

			serviceUsuario.save(dto);

			return new ResponseEntity<String>(HttpStatus.ACCEPTED);

		} else {

			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);

		}

	}

	@PostMapping
	public ResponseEntity<String> createOne(@RequestBody UsuarioDto dto) {

		serviceUsuario.save(dto);

		return new ResponseEntity<String>(HttpStatus.CREATED);

	}

	@PostMapping("/login")
	public ResponseEntity<Boolean> validate(@RequestBody UsuarioDto dto) {

		return new ResponseEntity<Boolean>(serviceUsuario.validateUser(dto), HttpStatus.CREATED);

	}
}
