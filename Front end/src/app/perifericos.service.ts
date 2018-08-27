import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PerifericosService {

  constructor(private http: HttpClient) { }

  getAllDispositivos() {
    // post the data to Express y devuelve algo
    return this.http.get('http://192.168.0.151:8081/customers').subscribe(data => {
        console.log(data, " esto viene del server")
      });
  }

}
