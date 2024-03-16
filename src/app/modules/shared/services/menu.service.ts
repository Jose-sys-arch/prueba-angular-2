import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getOptionsMenu(rol: string) {
    return this.http.get<any>(
      environment.apiUrl + 'rol-rol-opciones/rol/' + rol
    );
  }

  closeSession() {
    return this.http.post<any>(
      environment.apiUrl +
        'usuario/logout?id=' +
        Number.parseInt(sessionStorage.getItem('id')!),
      null
    );
  }
}
