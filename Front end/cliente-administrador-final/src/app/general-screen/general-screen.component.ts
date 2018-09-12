import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-general-screen',
  templateUrl: './general-screen.component.html',
  styleUrls: ['./general-screen.component.css']
})
export class GeneralScreenComponent implements OnInit {

  title = 'app';

  greetings: string[] = [];
  showConversation: boolean = false;
  ws: any;
  data: string;
  origin : string;
  disabled: boolean;
  
  constructor() { 
    this.connect();
  }

  ngOnInit() {
  }

  messageEvent($event){
    console.log("esto vino de event ");
    console.log($event);
    console.log("parseo");
    console.log("data : " + $event.data);
    this.data = $event.data; 
    this.origin = $event.id;
    this.sendName();
  }

  connect() {
    //connect to stomp where stomp endpoint is exposed
    //let ws = new SockJS(http://localhost:8080/greeting);
    let socket = new WebSocket("ws://localhost:1025/greeting");
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, function (frame) {
      that.ws.subscribe("/errors", function (message) {
        alert("Error " + message.body);
      });
      that.ws.subscribe("/topic/reply", function (message) {
        console.log(message)
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

  sendName() {
    console.log("envio esto de mensaje " + this.data)
    var data = JSON.stringify({
      'origin': this.origin,
      'data': this.data
    })
    console.log("voy a enviar esto  al back end " + data)
    this.ws.send("/app/message", {}, data);
  }


  setConnected(connected) {
    this.disabled = connected;
    this.showConversation = connected;
    this.greetings = [];
  }
}
