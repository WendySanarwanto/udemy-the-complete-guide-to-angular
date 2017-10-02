import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { IServer } from '../../shared/server.contract';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  server_name = '';
  server_content = '';
  @Output() addServer: EventEmitter<IServer> = new EventEmitter<IServer>();

  addServerClick(is_blueprint: boolean = false) {
    const new_server: IServer = {
      name: this.server_name,
      content: this.server_content,
      is_blueprint: is_blueprint,
    };
    this.addServer.emit(new_server);
  }

  constructor() { }

  ngOnInit() {
  }

}
