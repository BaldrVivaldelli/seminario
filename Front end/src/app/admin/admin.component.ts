import { Component, OnInit } from '@angular/core';
import { PerifericosService } from '../perifericos.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private perifericos : PerifericosService) { 
    perifericos.getAllDispositivos();
  }

  ngOnInit() {

  }

}
