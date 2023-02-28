import { Component, Input } from '@angular/core';

@Component({
  selector: 'toggle-panel',
  templateUrl: './toggle-panel.component.html',
  styleUrls: ['./toggle-panel.component.css']
})
export class TogglePanelComponent {
  toggleP :boolean = false;

  @Input()
  title:string = "titre par défaut";
}
