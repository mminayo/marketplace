package edu.es.eoi.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
@Table(name = "ARTICULO", schema = "MARKETPLACE")
public class Articulo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int id;
	
	@Column(name = "NOMBRE")
	private String nombre;

	@Column(name = "PRECIO")
	private double precio;
	
	@Column(name = "STOCK")
	private int stock;
	
	@OneToMany(targetEntity = Pertenece.class, cascade = CascadeType.ALL)
	private List<Pertenece> pertenecen;
}
