package edu.es.eoi.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.es.eoi.dto.ArticulosPedidosDto;
import edu.es.eoi.dto.PedidoDto;
import edu.es.eoi.entity.Articulo;
import edu.es.eoi.entity.Pedido;
import edu.es.eoi.entity.Pertenece;
import edu.es.eoi.entity.Usuario;
import edu.es.eoi.repository.ArticuloRepository;
import edu.es.eoi.repository.PedidoRepository;
import edu.es.eoi.repository.UsuarioRepository;

@Service
public class PedidoServiceImpl {

	@Autowired
	PedidoRepository repoPedido;
	
	@Autowired
	ArticuloRepository repoArticulo;
	
	@Autowired
	UsuarioRepository repoUsuario;

	public void save(PedidoDto dto, int userId) {

		Pedido pedido = new Pedido();
		pedido.setNombre(dto.getNombre());
		pedido.setFecha(dto.getFecha());

		findUsuario(userId, pedido);

		List<Pertenece> lista = mapeoPedidoArticulosDto(dto, pedido);

		pedido.setPertenecen(lista);

		repoPedido.save(pedido);

	}

	private void findUsuario(int userId, Pedido pedido) {
		Usuario user = repoUsuario.findById(userId).get();
		pedido.setUsuario(user);
		user.getPedidos().add(pedido);
		
	}

	private List<Pertenece> mapeoPedidoArticulosDto(PedidoDto dto, Pedido pedido) {
		List<ArticulosPedidosDto> articulos=dto.getArticulos();
		List<Pertenece> lista=new ArrayList<Pertenece>();
		
		for (ArticulosPedidosDto pedidoArticulosDto : articulos) {			
			
			Articulo articulo = repoArticulo.findById(pedidoArticulosDto.getId()).get();
			
			Pertenece p=new Pertenece();
			p.setArticulo(articulo);
			p.setPedido(pedido);
			p.setCantidad(pedidoArticulosDto.getCantidad());
			
			if(articulo.getPertenecen()!=null) {
				articulo.getPertenecen().add(p);
			}else{
				articulo.setPertenecen(new ArrayList<Pertenece>());
				articulo.getPertenecen().add(p);
			}				
			
			lista.add(p);
		}
		return lista;
	}
	

	public void delete(int id) {

		Pedido p = repoPedido.findById(id).get(); 
		p.getUsuario().getPedidos().remove(p);
		repoPedido.deleteById(id);

	}

	public PedidoDto find(int id) throws NoSuchElementException {		
		
		Pedido pedido = repoPedido.findById(id).get();

		PedidoDto dto = new PedidoDto();
		
		dto.setNombre(pedido.getNombre());
		dto.setFecha(pedido.getFecha());
		dto.setId(pedido.getId());
		
		List<ArticulosPedidosDto> lista=new ArrayList<ArticulosPedidosDto>();
		
		for (Pertenece articulo : pedido.getPertenecen()) {
			ArticulosPedidosDto temp= new ArticulosPedidosDto();
			   temp.setId(articulo.getArticulo().getId());
			   temp.setCantidad (articulo.getCantidad ());
			   lista.add(temp);
		}
		   
		dto.setArticulos(lista);

		return dto;
	}
	
	public List<PedidoDto> findByNombre(String nombre) {

		List<Pedido> pedidos = repoPedido.findByNombreContaining(nombre);

		List<PedidoDto> lista = new ArrayList<PedidoDto>();

		for (Pedido pedido : pedidos) {
			
			List<ArticulosPedidosDto> listaArticulos = new ArrayList<ArticulosPedidosDto>();
			
			PedidoDto dto = new PedidoDto();
			dto.setNombre(pedido.getNombre());
			dto.setFecha(pedido.getFecha());
			dto.setId(pedido.getId());
			
			for (Pertenece temp : pedido.getPertenecen()) {
				
				ArticulosPedidosDto dtoTemp = new ArticulosPedidosDto();
				dtoTemp.setId(temp.getArticulo().getId());
				dtoTemp.setCantidad(temp.getCantidad());
				listaArticulos.add(dtoTemp);
			}
			
			dto.setArticulos(listaArticulos);

			lista.add(dto);

		}
		return lista;

	}
}