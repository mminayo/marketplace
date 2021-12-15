import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedidos/pedido';
import { ServicioPedidosService } from '../pedidos/servicio-pedidos.service';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios:Usuario[] = [];
  page:number = 0;
  listaPedidos:Pedido[] = [];
  pedidos:Pedido[] = [];
  usuario:Usuario = new Usuario();

  constructor(private usuarioService:UsuarioService, private pedidoService:ServicioPedidosService) {
    
   }

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe(
      data => {
        this.usuarios = data;
      }
    );

    this.pedidoService.getPedidos().subscribe(
      data => this.pedidos = data
    );
    
    this.usuario = this.usuarioService.getUsuario();

  }

  asignarPedidos(pedidos:Pedido[]): void {
    for (let pedido of pedidos) {
      if (pedido.usuarioId === this.usuario.id) {
        this.listaPedidos.push(pedido);
       }
    }
    this.usuario.listaPedidos = this.listaPedidos;
  }
}
