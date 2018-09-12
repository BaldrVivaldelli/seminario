import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Data } from '../Models/data';
@Component({
  selector: 'app-general-screen',
  templateUrl: './general-screen.component.html',
  styleUrls: ['./general-screen.component.css']
})
export class GeneralScreenComponent implements OnInit {
  
  title = 'app';

  screenOne: string;
  screenTwo: string;
  screenThree: string;
  
  ws: any;
  name: string;
  disabled: boolean;

  constructor() {
    this.connect();
   }

  ngOnInit() {

  }
  connect() {
    //connect to stomp where stomp endpoint is exposed
    // lo dejo comentado porque tengo que armar toda la estructura de seguridad del back end
    //let socket = new SockJS("http://localhost:1025/greeting");
    let socket = new WebSocket("ws://localhost:1025/greeting");
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, function (frame) {
      that.ws.subscribe("/errors", function (message) {
        alert("Error " + message.body);
      });
      that.ws.subscribe("/topic/reply", function (message) {
        console.log(message.body)
        that.manageData(message.body);
      });
      that.disabled = true;
    }, function (error) {
      alert("STOMP error " + error);
    });
  }

  disconnect() {
    if (this.ws != null) {
      this.ws.ws.close();
    }
    this.setConnected(false);
    console.log("Disconnected");
  }



  manageData(message) {
    let aux  = JSON.parse(message);

    let result = new Data(aux.origin, aux.data);
    console.log(aux.origin);
    let asdf = aux.origin;
    switch (asdf) {
      case "moduloUno":
      console.log("entro aca")
        this.screenOne = aux.data;
        break;
      case "moduloDos":
        this.screenTwo = aux.data;
        break;
      case "moduloTres":
        this.screenThree = aux.data;
        break;        
    }
}
    

  setConnected(connected) {
    this.disabled = connected;
    //this.messageInput = [];
  }
}
