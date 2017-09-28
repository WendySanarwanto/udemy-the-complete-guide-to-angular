import { Component } from '@angular/core';
import { IServer } from '../shared/server.contract';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  server_name = '';
  server_content = '';
  servers: IServer[] = [];

  addServerClick(is_blueprint: boolean = false) {
    this.servers.push({
      name: this.server_name,
      content: this.server_content,
      is_blueprint: is_blueprint,
    });
  }
}
