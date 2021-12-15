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

import edu.es.eoi.dto.ArticuloDto;
import edu.es.eoi.service.ArticuloServiceImpl;

@RestController
@RequestMapping(value = "marketplace/articulo")
public class ArticuloController {

	@Autowired
	ArticuloServiceImpl serviceArticulo;

	@GetMapping("/{id}")
	public ResponseEntity<ArticuloDto> getOne(@PathVariable int id) {

		return new ResponseEntity<ArticuloDto>(serviceArticulo.find(id), HttpStatus.OK);

	}

	@PostMapping
	public ResponseEntity<String> createOne(@RequestBody ArticuloDto dto) {

		serviceArticulo.save(dto);

		return new ResponseEntity<String>(HttpStatus.CREATED);

	}

	@PutMapping("/{id}")
	public ResponseEntity<String> updateOne(@RequestBody ArticuloDto dto, @PathVariable int id) {

		if (id == dto.getId() && serviceArticulo.find(id) != null) {

			serviceArticulo.save(dto);

			return new ResponseEntity<String>(HttpStatus.ACCEPTED);

		} else {

			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);

		}

	}
	
	@GetMapping("/nombre/{nombreParcial}")
	public ResponseEntity<List<ArticuloDto>> getByNombre(@PathVariable String nombreParcial) {

		return new ResponseEntity<List<ArticuloDto>>(serviceArticulo.findByNombre(nombreParcial), HttpStatus.OK);

	}
}
