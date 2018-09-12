import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screen-tres',
  templateUrl: './screen-tres.component.html',
  styleUrls: ['./screen-tres.component.css']
})
export class ScreenTresComponent implements OnInit {

  @Input() screenThree: string;
  
  constructor() { }

  ngOnInit() {
  }

}
