import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Data } from '../Models/data';

@Component({
  selector: 'app-screen-dos',
  templateUrl: './screen-dos.component.html',
  styleUrls: ['./screen-dos.component.css']
})
export class ScreeDosComponent implements OnInit {


  message: string;
  result: Data;
  id: string = "moduloDos";

  @Output() messageEvent = new EventEmitter<Data>();

  constructor() {

  }

  ngOnInit() {
  }

  sendMessage() {
    console.log("voy a enviar esto al padre");
    this.result = new Data(this.id, this.message);
    this.messageEvent.emit(this.result);
  }
}
