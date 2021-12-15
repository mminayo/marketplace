import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.BACK_URL + 'usuarios';
  usuario : Usuario = new Usuario();

  constructor(private http:HttpClient) {

  }

  getUsuario(){
    return this.usuario;
  }

  setUsuario(usuario:Usuario){
    this.usuario = usuario;
  }

  getAll():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }

  get(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(this.url + '/' + id);
  }

  post(usario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url,usario);
  }

  put(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(this.url + '/' + usuario.id , usuario)

  }
}
