package edu.es.eoi.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.es.eoi.dto.PedidoDto;
import edu.es.eoi.service.PedidoServiceImpl;

@RestController
@RequestMapping(value = "marketplace/pedido")
public class PedidoController {
	
	@Autowired
	PedidoServiceImpl servicePedido;
	
	@PostMapping
	public ResponseEntity<String> createOne(@RequestBody PedidoDto dto, @RequestParam int userId) {
		
		servicePedido.save(dto, userId);
		
		return new ResponseEntity<String>(HttpStatus.CREATED);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateOne(@RequestBody PedidoDto dto, @PathVariable int id, @RequestParam int userId) {
		
		if(id == dto.getId()&&servicePedido.find(id)!=null) {
			
			servicePedido.save(dto, userId);
			
			return new ResponseEntity<String>(HttpStatus.ACCEPTED);
			
		}else {
			
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		
		}		
		
	}
	
	@GetMapping("/{id}")	
	public ResponseEntity<PedidoDto> getOne(@PathVariable int id) {
		PedidoDto dto = null;
		try {
			dto = servicePedido.find(id);
			
		} catch (NoSuchElementException e) {
			
			return new ResponseEntity<PedidoDto>(dto, HttpStatus.OK);
		}
		return new ResponseEntity<PedidoDto>(dto, HttpStatus.OK);
		
	}	
	
	@GetMapping("/nombre/{nombreParcial}")
	public ResponseEntity<List<PedidoDto>> getByNombre(@PathVariable String nombreParcial) {

		return new ResponseEntity<List<PedidoDto>>(servicePedido.findByNombre(nombreParcial), HttpStatus.OK);

	}
	
	@DeleteMapping("/{id}")	
	public ResponseEntity<String> deleteOne(@PathVariable int id) {

		servicePedido.delete(id);
		
		return new ResponseEntity<String>(HttpStatus.ACCEPTED);
		
	}

}
