import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screen-uno',
  templateUrl: './screen-uno.component.html',
  styleUrls: ['./screen-uno.component.css']
})
export class ScreenUnoComponent implements OnInit {

  @Input() screenOne : string;

  constructor() {
   }

  ngOnInit() {
  }
}
