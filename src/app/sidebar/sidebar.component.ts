import { MaterialService } from './../services/material.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() isDarkTheme : boolean;
  @Input() isOpen : boolean = false;

  constructor(private materialService : MaterialService) {
    this.materialService.toggled.subscribe(() => this.isOpen = !this.isOpen);
  }

  ngOnInit() {
  }

}
