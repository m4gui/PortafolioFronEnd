import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  urlPro:string = "https://backendmg-rnel.onrender.com/proyecto/";

  constructor(private http:HttpClient) { }
  getProyecto():Observable<any> {
    return this.http.get<any>(this.urlPro + "lista");
  }
}
