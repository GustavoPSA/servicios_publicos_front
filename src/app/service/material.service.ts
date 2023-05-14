import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../models/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  materialURL = 'http://localhost:8080/servicios-publicos/materiales';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.materialURL);    
  }

  public getById(idMaterial: number): Observable<Material> {
    return this.httpClient.get<Material>(this.materialURL + `/${idMaterial}`);    
  }

  public add(material: Material): Observable<any> {
    return this.httpClient.post<any>(this.materialURL, material);    
  }

  public edit(material: Material): Observable<any> {
    return this.httpClient.put<any>(this.materialURL, material);    
  }
}
