import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../articulo/articulo';
import { ArticuloComponent } from '../articulo/articulo.component';
import { ArticuloService } from '../articulo/articulo.service';
import { Pedido } from '../pedidos/pedido';
import { ServicioPedidosService } from '../pedidos/servicio-pedidos.service';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  articulos:Articulo[] = [];
  pedidos:Pedido[] = [];
  usuarios:Usuario[] = [];
  usuario:Usuario = new Usuario();
  usuarioLogeado:Usuario;

  constructor(private servicioPedidos:ServicioPedidosService,private servicioArticulos:ArticuloService,private servicioUsuarios:UsuarioService) {

    this.usuarioLogeado = new Usuario();
  }

  ngOnInit(): void {

    this.usuarioLogeado = this.servicioUsuarios.getUsuario();
    console.log(this.usuarioLogeado.nombre);

    this.servicioArticulos.getAll().subscribe(
      data => this.articulos = data
    );

    this.servicioPedidos.getAll().subscribe(
      data => this.pedidos = data
    );

    this.servicioUsuarios.getAll().subscribe(
      data => this.usuarios = data
    );


  }


}
