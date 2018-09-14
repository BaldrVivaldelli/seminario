import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Dispositivo } from '../Models/Dispositivo';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dispositivos-list',
  templateUrl: './dispositivos-list.component.html',
  styleUrls: ['./dispositivos-list.component.css']
})
export class DispositivosListComponent implements OnInit {
  dispositivos: Observable<Dispositivo[]>;
  aux: Dispositivo;
  readonly ROOT_URL = "http://localhost:1026";

  constructor(private http: HttpClient) {
    this.dispositivos = this.getAllDispositivos();


  }

  ngOnInit() {

  }

  getAllDispositivos(): Observable<Dispositivo[]> {
    return this.http.get<Dispositivo[]>(this.ROOT_URL + "/api/dispositivos");
  }
}