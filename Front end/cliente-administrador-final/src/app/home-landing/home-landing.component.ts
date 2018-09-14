import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';

import { DispositivoService } from '../Services/dispositivos.service';
import { Observable } from 'rxjs';
import { Dispositivo } from '../Models/Dispositivo';
@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css']
})
export class HomeLandingComponent implements OnInit {

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  dispositivos: Observable<Dispositivo[]>;

  constructor(private d : DispositivoService ) { 
  }
  ngOnInit() {
    this.dispositivos = this.d.getAllDispositivos();
  }
  isCollapsed = false;
  triggerTemplate = null;
  

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

}


