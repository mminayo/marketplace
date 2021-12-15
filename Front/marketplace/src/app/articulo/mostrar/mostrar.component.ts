import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../articulo';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  articulo:Articulo = new Articulo();

  constructor(private articuloService:ArticuloService,private activatedRouter:ActivatedRoute,private router:Router ) { }


  ngOnInit(): void {
    this.datos();
  }

  datos():void{
    this.activatedRouter.params.subscribe(
      data => {
        let id = data['id'];

        if(id){
         this.articuloService.get(id).subscribe(
           dat => this.articulo = dat
         );
        }
      }
    );
  }



}
