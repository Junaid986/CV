import { MaterialService } from './../services/material.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rs-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  
  constructor(private materialService : MaterialService) {}

  ngOnInit() {
  }

  toggle(){
    this.materialService.onToggled();
  }

}
