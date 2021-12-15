package edu.es.eoi.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "PERTENECE_A", schema = "MARKETPLACE")
public class Pertenece {

	@Id
	@Column(name = "CANTIDAD")
	private Integer cantidad;	
	
	@ManyToOne(targetEntity = Articulo.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Articulo articulo;
	
	@ManyToOne(targetEntity = Pedido.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Pedido pedido;
	
	
}
