import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../models/estado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  estadoURL = 'http://localhost:8080/servicios-publicos/estado';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Estado[]> {
    return this.httpClient.get<Estado[]>(this.estadoURL);    
  }
}
