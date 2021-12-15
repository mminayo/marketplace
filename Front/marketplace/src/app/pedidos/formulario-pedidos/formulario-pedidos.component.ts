import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo, ArticuloPedido } from 'src/app/articulo/articulo';
import { ArticuloService } from 'src/app/articulo/articulo.service';
import { Usuario } from 'src/app/usuario/usuario';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Pedido } from '../pedido';
import { ServicioPedidosService } from '../servicio-pedidos.service';

@Component({
  selector: 'app-formulario-pedidos',
  templateUrl: './formulario-pedidos.component.html',
  styleUrls: ['./formulario-pedidos.component.css']
})
export class FormularioPedidosComponent implements OnInit {

  pedido:Pedido=new Pedido();
  pedidos:Pedido[] = [];
  articulos:Articulo[] = [];
  filterArticulo = '';
  listaArticulosPedidos:Array<ArticuloPedido>=new Array<ArticuloPedido>();
  usuario:Usuario=new Usuario();

  constructor(private servicio:ServicioPedidosService, private servicioArticulos:ArticuloService, private router:Router, private activatedRoute:ActivatedRoute, private usuarioService:UsuarioService) {
    this.pedido=new Pedido();
    this.pedido.usuarioId = this.usuarioService.getUsuario().id;
   }

  ngOnInit(): void {
    this.datos();

    this.servicioArticulos.getAll().subscribe(
      data => this.articulos = data
    );

  }
  addToPedido(articulo:Articulo){
    let a1:ArticuloPedido = new ArticuloPedido();
    a1.nombre=articulo.nombre;
    a1.cantidad=articulo.cantidad;
    a1.stock=articulo.stock;
    a1.precio=articulo.precio;
    this.listaArticulosPedidos.push(a1);
    this.pedido.listaArticulosPedidos=this.listaArticulosPedidos;
    articulo.stock = articulo.stock - a1.cantidad;
  }


  datos():void{
    this.activatedRoute.params.subscribe(
      data => {
        let id = data['id'];

        if(id){
         this.servicio.getPedidosId(id).subscribe(
           dat => this.pedido = dat
         );
        }
      }
    );
  }

  crearPedido():void{
    this.servicio.postPedido(this.pedido)
    .subscribe(
      data => this.router.navigate(['pedidos'])
      
      
    );
  
  }


  actualizarPedido(pedidoId:number){
    this.servicio.updatePedido(pedidoId, this.pedido)
    .subscribe(
      data => this.router.navigate(['pedidos'])

    );

  }

}
