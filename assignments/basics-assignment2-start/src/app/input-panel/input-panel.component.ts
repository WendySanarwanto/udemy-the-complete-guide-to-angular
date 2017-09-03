import { Component } from '@angular/core';

@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.css']
})

export class InputPanelComponent {
  username = '';

  onAddClicked() {
    this.username = '';
  }

  isAllowedToAdd() {
    return this.username.length > 0;
  }
}
