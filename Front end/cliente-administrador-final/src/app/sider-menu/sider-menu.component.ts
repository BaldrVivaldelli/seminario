import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider-menu',
  templateUrl: './sider-menu.component.html',
  styleUrls: ['./sider-menu.component.css']
})
export class SiderMenuComponent implements OnInit {

  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  constructor() { }

  ngOnInit() {
  }
  
  isCollapsed = false;
  triggerTemplate = null;


  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

}


