import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
    userName:string = "Votre prénom";
    message:string = "";

    onAction(){
      this.message = `Bonjour ${this.userName}`;
    }
}
