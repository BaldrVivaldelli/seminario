import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Dispositivo } from '../Models/Dispositivo';
import { Observable } from 'rxjs';

@Injectable()
export class DispositivoService {

  readonly ROOT_URL = "http://localhost:1026";

  constructor(private http: HttpClient) { }

  getAllDispositivos(): Observable<Dispositivo[]> {
    return this.http.get<Dispositivo[]>(this.ROOT_URL + "/api/dispositivos");
  }  
}