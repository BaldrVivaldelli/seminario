import { Component, OnInit, Input } from '@angular/core';
import { Dispositivo } from '../Models/Dispositivo';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.scss']
})
export class DispositivoComponent implements OnInit {

  @Input('dispositivo') dispositivo : Dispositivo;
  title : string;
  constructor() {
    console.log("llegue al hijo")
    console.log(this.dispositivo);
    
   }

  ngOnInit() {
  }

  goToDetail(event){
    let target = event.target || event.srcElement || event.currentTarget;
    let aux = target.attributes.id;
    
  }
}
