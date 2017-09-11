import { Component } from '@angular/core';

@Component({
  selector: 'app-logs-panel',
  templateUrl: './logs-panel.component.html',
  styleUrls: ['./logs-panel.component.css']
})
export class LogsPanelComponent {
  showContent = false;
  BUTTON_DISPLAY_ACTION = 'Display';
  BUTTON_HIDE_ACTION = 'Hide';
  buttonActionLabel = this.BUTTON_DISPLAY_ACTION;
  buttonClickLogs: string[] = [];

  onButtonClicked() {
    // Toggle the displaying of that paragraph with the button created in the first step
    this.showContent = !this.showContent;
    this.buttonActionLabel = this.showContent ? this.BUTTON_HIDE_ACTION : this.BUTTON_DISPLAY_ACTION;

    this.logButtonClick();
  }

  private logButtonClick() {
    const timestamp = Date();
    const logMessage = `Display button is clicked at ${timestamp}`;
    this.buttonClickLogs.push(logMessage);
  }
}
