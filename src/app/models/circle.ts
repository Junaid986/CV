import { Utils } from './../services/utils';
import { Injectable } from '@angular/core';

export class Circle {
    
    dx: number;
    dy: number;
    color: string;

    constructor(private x: number, private y: number,private radius: number, 
            private context: CanvasRenderingContext2D) { 
        this.dx = (Math.random() - 0.5) * 5;
        this.dy = (Math.random() - 0.5) * 5;
        this.color = Utils.getRandomRgba();
    }

    public draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.context.strokeStyle = this.color;
        this.context.stroke();
    }

    public update() {
        if((this.x + this.radius) > window.innerWidth || (this.x - this.radius) < 0){
            this.dx = -this.dx;
        }
        if((this.y + (2*this.radius)) > window.innerHeight || (this.y - this.radius) < 0){
            this.dy = -this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
    }

   
}
