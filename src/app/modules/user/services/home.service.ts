import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getInfoUser() {
    return this.http.get<any>(
      environment.apiUrl +
        'usuario/' +
        Number.parseInt(sessionStorage.getItem('id')!)
    );
  }

  getInfoSessions(){
    return this.http.get<any>(
      environment.apiUrl +
        'session/usuario/last-session/' +
        Number.parseInt(sessionStorage.getItem('id')!)
    );
  }
}
