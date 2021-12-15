import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario();

  formulario!:FormGroup;

  constructor(private usuarioService:UsuarioService,private router:Router,private activatedRoute:ActivatedRoute, private formBilder:FormBuilder) { }

  ngOnInit(): void {
    this.datos();

    this.formulario = this.formBilder.group({
      nombre: ['',[Validators.required,Validators.minLength(5)]],
      password: ['',[Validators.required,Validators.minLength(8)]]

    })

  }

  datos():void{
    this.activatedRoute.params.subscribe(
      data => {
        let id = data['id'];

        if(id){
          this.usuarioService.get(id).subscribe(
            dat => this.usuario = dat
          );
        }
      }
    );

  }

  crear():void{
    //Creo y redirijo a lista despues de crear
    this.usuarioService.post(this.usuario).subscribe(
      data => this.router.navigate(['/usuario'])
    );
  }

  actualizar():void{
    //una vez actualize me redirije a la lista
    this.usuarioService.put(this.usuario).subscribe(
      data => this.router.navigate(['/usuario'])
    );
  }

}
