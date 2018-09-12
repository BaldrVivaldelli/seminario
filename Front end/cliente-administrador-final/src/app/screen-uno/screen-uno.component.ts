import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Data } from '../Models/data';

@Component({
  selector: 'app-screen-uno',
  templateUrl: './screen-uno.component.html',
  styleUrls: ['./screen-uno.component.css']
})
export class ScreenUnoComponent implements OnInit {

  message: string;
  result : Data;
  id : string = "moduloUno";
  
  @Output() messageEvent = new EventEmitter<Data>();
   
  constructor() {

   }

  ngOnInit() {
  }

  sendMessage(){
    console.log("voy a enviar esto al padre");
    this.result = new Data(this.id,this.message);
    this.messageEvent.emit(this.result);
  }
}
