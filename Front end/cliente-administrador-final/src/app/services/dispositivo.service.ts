import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable()
export class DispositivoService {

  constructor(private http: HttpClient) { }

  getAllDispositivos(){
    this.http.get("localhost:1026/dispositivos").subscribe((data:any[]) => {
      console.log(data)
    });
  }
}
