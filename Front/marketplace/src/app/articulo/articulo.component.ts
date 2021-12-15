import { Component, OnInit } from '@angular/core';
import { Articulo } from './articulo';
import { ArticuloService } from './articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  articulos:Articulo[] = [];
  filterArticulo = '';
  page:number = 0;

  constructor(private articuloService:ArticuloService) { }

  ngOnInit(): void {
    this.articuloService.getAll().subscribe(
      data =>{
        this.articulos = data
      });
  }

  }
