package edu.es.eoi.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.es.eoi.dto.ArticuloDto;
import edu.es.eoi.entity.Articulo;
import edu.es.eoi.repository.ArticuloRepository;

@Service
public class ArticuloServiceImpl {
	
	@Autowired
	ArticuloRepository repoArticulo;
	
	
	public void save(ArticuloDto dto) {

		Articulo articulo = new Articulo();
		BeanUtils.copyProperties(dto, articulo);

		repoArticulo.save(articulo);
		
	}
	
	public ArticuloDto find(int id) {

		Articulo articulo = repoArticulo.findById(id).get();

		ArticuloDto dto = new ArticuloDto();		
		
		dto.setId(articulo.getId());
		dto.setNombre(articulo.getNombre());
		dto.setPrecio(articulo.getPrecio());
		dto.setStock(articulo.getStock());
		
		return dto;
	}
	
	public List<ArticuloDto> findByNombre(String nombre) {
		
		List<Articulo> articulos = repoArticulo.findByNombreContaining(nombre);
		
		List<ArticuloDto> lista = new ArrayList<ArticuloDto>();
		for (Articulo articulo : articulos) {
			
			ArticuloDto dto = new ArticuloDto();
			dto.setNombre(articulo.getNombre());
			dto.setPrecio(articulo.getPrecio());
			dto.setStock(articulo.getStock());
			lista.add(dto);	

		}
		return lista;
	
		
	}
	

}
