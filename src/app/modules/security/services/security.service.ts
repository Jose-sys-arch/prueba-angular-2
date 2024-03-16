import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginRequest } from '../../../interfaces/general.interface';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private http: HttpClient) {}

  login(data:LoginRequest){
    return this.http.post<any>(
      environment.apiUrl + 'usuario/login',
      data,
    );
  }

  register(data:any){
    return this.http.post<any>(
      environment.apiUrl + 'usuario/register',
      data,
    );
  }
}
