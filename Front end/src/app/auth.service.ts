import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  getUserDetails(username, password){
    // post the data to Express y devuelve algo
    return this.http.post('http://192.168.0.151:8081/fdma/angular',
      {
        username,password
      }).subscribe(data=>{
        console.log(data," esto viene del server")
      });
  }

}
