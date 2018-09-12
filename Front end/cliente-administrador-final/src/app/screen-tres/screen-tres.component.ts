import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Data } from '../Models/data';


@Component({
  selector: 'app-screen-tres',
  templateUrl: './screen-tres.component.html',
  styleUrls: ['./screen-tres.component.css']
})
export class ScreeTresComponent implements OnInit {

  message: string;
  result: Data;
  id: string = "moduloTres";

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