import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // tslint:disable-next-line:component-selector
  // selector: '[app-servers]',
  // tslint:disable-next-line:component-selector
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  ngOnInit() {
  }

}
