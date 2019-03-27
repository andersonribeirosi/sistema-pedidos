import { Injectable } from '@angular/core';
import { CredenciaisDTO } from './credenciais.dto.';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable()
export class AuthServiceLogin{

    constructor(private http: HttpClient){}

    authenticate(creds: CredenciaisDTO){
        return this.http.post(`${API.baseUrl}/login`, 
        creds,
        {
            observe: 'response',
            responseType: 'text'
        });
    }
}