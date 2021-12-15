import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from './articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private url = environment.BACK_URL + 'articulos';

  constructor(private http:HttpClient) { }

  getAll():Observable<Articulo[]>{
    return this.http.get<Articulo[]>(this.url);
  }

  get(id:number):Observable<Articulo>{
    return this.http.get<Articulo>(this.url + '/' + id);
  }

  post(articulo:Articulo):Observable<Articulo>{
    return this.http.post<Articulo>(this.url,articulo);
  }

  put(articulo:Articulo):Observable<Articulo>{
    return this.http.put<Articulo>(this.url + '/' + articulo.id , articulo );
  }

}
