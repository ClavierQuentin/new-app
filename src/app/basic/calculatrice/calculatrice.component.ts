import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent {
  firstNumber:number = 0;
  secondNumber:number = 0;
  result:number = 0;

  x:number=0;
  y:number = 0;

  onMouseMouve(evt:MouseEvent){
    let currentDiv:HTMLElement = <HTMLElement>evt.target;
    this.x = evt.pageX - currentDiv.offsetLeft;
    this.y = evt.pageY - currentDiv.offsetTop;
  }

  onMouseLeave(){
    this.x = 0;
    this.y = 0;
  }

  onCalculer(symbole:string){
    switch(symbole){
      case "+": 
        this.result = Number(this.firstNumber) + Number(this.secondNumber);
        break;
      case "-":
        this.result = Number(this.firstNumber) - Number(this.secondNumber);
        break;
      case "*":
        this.result = Number(this.firstNumber) * Number(this.secondNumber);
        break;
      case "/":
        this.result = Number(this.firstNumber) / Number(this.secondNumber);
        break;
      default:
        this.result = 0;
    }
  }
}
