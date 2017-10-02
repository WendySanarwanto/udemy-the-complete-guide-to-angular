import { Component } from '@angular/core';
import { IServer } from '../shared/server.contract';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  servers: IServer[] = [];

  addServerClick(new_server: IServer) {
    this.servers.push(new_server);
  }
}
