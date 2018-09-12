import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screen-dos',
  templateUrl: './screen-dos.component.html',
  styleUrls: ['./screen-dos.component.css']
})
export class ScreenDosComponent implements OnInit {


  @Input() screenTwo: string;

  constructor() {
  }

  ngOnInit() {
  }
}
