import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../articulo';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-formulario-articulo',
  templateUrl: './formulario-articulo.component.html',
  styleUrls: ['./formulario-articulo.component.css']
})
export class FormularioArticuloComponent implements OnInit {

  articulo:Articulo = new Articulo();
  public formulario!:FormGroup;


  constructor(private articuloService:ArticuloService,private router:Router,private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.datos();

    this.formulario = this.formBuilder.group({
      nombre: ['',[Validators.required,Validators.minLength(5)]],
      precio: ['',[Validators.required,Validators.min(20)]],
      stock: ['',[Validators.required,Validators.min(5)]],
      imagen: ['',[Validators.required]]


    })

  }

  datos():void{
    this.activatedRoute.params.subscribe(
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

  crear():void{
  this.articuloService.post(this.articulo).subscribe(
        data => this.router.navigate(['articulos'])
    );
  }

  actualizar():void{
    this.articuloService.put(this.articulo).subscribe(
      data => this.router.navigate(['articulos'])
    );
  }

  mostrar():void{
    this.articuloService.get(this.articulo.id).subscribe(
      data => this.router.navigate(['articulos'])
    )
  }


}
