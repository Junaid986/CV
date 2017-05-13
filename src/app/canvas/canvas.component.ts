import { Circle } from './../models/circle';
import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';

@Component({
  selector: 'rs-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {
    
  @ViewChild('canvasSpace') canvas;
  context : CanvasRenderingContext2D;
  circles: Circle[] = [];

  constructor() { }

  ngOnInit() {
  }

ngAfterViewInit(): void {
  console.log(this.canvas);
  this.canvas.nativeElement.width = window.innerWidth;
  this.canvas.nativeElement.height = window.innerHeight;
  this.context = this.canvas.nativeElement.getContext('2d');
  // this.context.fillStyle = 'rgba(255,0,0,0.1)';
  // this.context.fillRect(100, 100, 100, 100);
  // this.context.fillStyle = 'rgba(0,0,255,0.5)';
  // this.context.fillRect(400, 300, 100, 100);
  // this.context.fillStyle = 'rgba(0,255,0,0.8)';
  // this.context.fillRect(600, 200, 100, 100);
  // this.context.beginPath();
  // this.context.moveTo(50,300);
  // this.context.lineTo(600,200);
  // this.context.strokeStyle = "#2196F3";
  // this.context.stroke();
  var x =  50;
  var y =  50;
  var radius = 70;
  var rand,rand1, rand2;
  
  for(let i : number = 0; i < 100; i++){
  x = Math.random() * (window.innerWidth - (2 * radius)) + radius;
  y = Math.random() * (window.innerHeight- (2 * radius)) + radius;
  let circle : Circle = new Circle(x, y, radius, this.context);
        this.circles.push(circle);
  }
  this.animate();
}

 public animate() {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.circles.forEach(element => {
          element.update();
          element.draw();
        });
        requestAnimationFrame(() => this.animate());
    };
}
