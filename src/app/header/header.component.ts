import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from '../common/services/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input()
  title = '';
  @Input()
  description = "";

  constructor(public preferencesService:PreferencesService ){
    console.log(" dans constructeurEn tête de titre:" + this.title);
  }
  ngOnInit(): void {
      console.log("Dans onInit titre = " + this.title);
      
  }
}
