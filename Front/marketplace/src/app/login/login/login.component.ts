import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Usuario } from 'src/app/usuario/usuario';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 formulario!:FormGroup;
 usuarioLogin:Usuario = new Usuario();
 mensaje = '';

 private url = environment.BACK_URL + 'usuarios';
  encontrado = false;


  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router,private usuarioService:UsuarioService ) {

  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre:['',Validators.required],
      password:['',Validators.required]
    })

  }

 login(){

    this.usuarioService.getAll().subscribe(
      data => {
       let usuario = data.find((datos:Usuario)=>{
          return datos.nombre === this.formulario.value.nombre &&
          datos.password === this.formulario.value.password
        });


        //si el usuario existe muestro mensaje, reseto el formulario y lo redirijo a la pagina
        if(usuario){
          //alert('El usuario existe');
          this.usuarioService.setUsuario(usuario);
          this.encontrado = true;
          this.formulario.reset();
          setTimeout(() => {
            this.router.navigate(['/usuario']);
          },4000);

        }else{
          //alert('El usuario no exite');
          this.encontrado = false;
        }


      }
    );
  }

}
