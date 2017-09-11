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
  serverCreated = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  servers = ['bahamuth', 'tonberry'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is '${this.serverName}'`;
    this.serverCreated = true;
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  ngOnInit() {
  }

}
