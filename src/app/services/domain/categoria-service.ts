import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<CategoriaDTO[]>{
    return this.http.get<CategoriaDTO[]>(`${API.baseUrl}/categorias`);
  }
}
