import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  findByCategoria(categoria_id: string){
    return this.http.get(`${API.baseUrl}/produtos/?categoria=${categoria_id}`);
  }
}
