import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IServer } from '../../shared/server.contract';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
   // None -> No encapsulation, styles apply globally; Native -> same as emlulated but only work on modern browsers.
   // Emulated -> It mimicks Native for sake of supporting old browsers and it's the default ViewEncapsulation
})

export class ServerElementComponent implements OnInit {
  @Input() server: IServer;

  constructor() { }

  ngOnInit() {
  }

}
