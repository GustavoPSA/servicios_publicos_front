import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  ciudadURL = 'http://localhost:8080/servicios-publicos/ciudad';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Ciudad[]> {
    return this.httpClient.get<Ciudad[]>(this.ciudadURL);    
  }
}
