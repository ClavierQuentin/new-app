import { Component, Input } from '@angular/core';
import { PreferencesService } from '../common/services/preferences.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input()
  title:string = "";

  public listeCouleurs:string[] = [
    "lightyellow", 
    "white",
    "lightgrey" , 
    "lightgreen" , 
    "lightpink" , 
    "lightblue"
  ]

  constructor(public preferencesService:PreferencesService){}
}
