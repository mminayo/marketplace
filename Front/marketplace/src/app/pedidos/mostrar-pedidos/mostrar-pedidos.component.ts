import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Articulo, ArticuloPedido } from 'src/app/articulo/articulo';
import { ArticuloService } from 'src/app/articulo/articulo.service';
import { Pedido } from '../pedido';
import { ServicioPedidosService } from '../servicio-pedidos.service';

@Component({
  selector: 'app-mostrar-pedidos',
  templateUrl: './mostrar-pedidos.component.html',
  styleUrls: ['./mostrar-pedidos.component.css']
})
export class MostrarPedidosComponent implements OnInit {

  pedido:Pedido=new Pedido();
  pedidos:Pedido[] = [];
  articulos:Articulo[] = [];
  listaArticulosPedidos:Array<ArticuloPedido>=new Array<ArticuloPedido>();

  constructor(private servicio:ServicioPedidosService, private servicioArticulos:ArticuloService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.datos();
    
    this.servicioArticulos.getAll().subscribe(
      data => this.articulos = data
    );

  
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


}
