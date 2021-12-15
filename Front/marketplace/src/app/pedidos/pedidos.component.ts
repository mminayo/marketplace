import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo, ArticuloPedido } from '../articulo/articulo';
import { ArticuloService } from '../articulo/articulo.service';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';
import { Pedido } from './pedido';
import { ServicioPedidosService } from './servicio-pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos:Pedido[] = [];
  filterPedidos = '';
  articulos:Articulo[] = [];
  filterArticulo = '';
  listaArticulosPedidos:Array<ArticuloPedido>=new Array<ArticuloPedido>();
  nombreParcial= '';
  pedido:Pedido = new Pedido();
  usuario:Usuario = new Usuario();

  constructor(private servicio:ServicioPedidosService, private servicioArticulos:ArticuloService, private router: Router,private activatedRouter:ActivatedRoute, private servicioUsuario:UsuarioService) {

   }

  ngOnInit(): void {
    this.servicio.getPedidos().subscribe(
      data => this.pedidos = data
    );

    this.servicioArticulos.getAll().subscribe(
      data => this.articulos = data
    );


  

  }

  precioTotal(pedido:Pedido):number{
    let total = 0;
      for (let articulo of pedido.listaArticulosPedidos) {
        total = total + (articulo.precio * articulo.cantidad);
    }
    pedido.price = total;
    return pedido.price;
  }

 obtenerPedidoId(pedidoId:number){
    this.servicio.getPedidosId(pedidoId)

  }

  obtenerPedidoNombre(){
    this.servicio.getPedidosNombre(this.nombreParcial)
    .subscribe(
      (pedidos:Array<Pedido>)=>{
        this.pedidos=pedidos;
        console.log(this.pedidos);
      }
    );
  }

  borrarPedido(pedidoId:number){
    this.servicio.deletePedido(pedidoId)
    .subscribe(data =>{this.servicio.getAll().subscribe(data => {this.pedidos = data;})});
  }



}

