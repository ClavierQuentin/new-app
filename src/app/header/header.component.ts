import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from '../common/services/preferences.service';
import { SessionService } from '../common/services/session.service';

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

  constructor(public preferencesService:PreferencesService, public sessionService:SessionService ){
  }
  ngOnInit(): void {
      
  }
}
