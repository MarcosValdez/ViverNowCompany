import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RemodelacionService {
  urlApi = `${environment.api.baseUrl}`;

  constructor(private http: HttpClient) {}

  getAllRemodelaciones() {
    return this.http.get(`${this.urlApi}/remodelacion`);
  }
}
