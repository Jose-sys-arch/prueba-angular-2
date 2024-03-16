import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigureService {
  constructor(private http: HttpClient) {}

  getInformation() {
    return this.http.get<any>(
      environment.apiUrl +
        'usuario/information/' +
        Number.parseInt(sessionStorage.getItem('id')!)
    );
  }

  updateData(data: any) {
    return this.http.put<any>(
      environment.apiUrl +
        'persona/' +
        Number.parseInt(sessionStorage.getItem('id')!),
      data
    );
  }

  updateUser(data: any) {
    return this.http.put<any>(
      environment.apiUrl +
        'usuario/' +
        Number.parseInt(sessionStorage.getItem('id')!),
      data
    );
  }
}
