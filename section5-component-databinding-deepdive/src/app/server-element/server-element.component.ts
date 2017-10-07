import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { IServer } from '../../shared/server.contract';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
   // None -> No encapsulation, styles apply globally; Native -> same as emlulated but only work on modern browsers.
   // Emulated -> It mimicks Native for sake of supporting old browsers and it's the default ViewEncapsulation
})

export class ServerElementComponent implements AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, 
  OnChanges, OnDestroy, OnInit, DoCheck {
  @Input() server: IServer;
  @Input() name: string;

  constructor() {
    console.log(`[DEBUG] - 'ServerElement': constructor is called.`);
  }

  ngOnInit() {
    console.log(`[DEBUG] - 'ServerElement': 'ngOnInit' is called.`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`[DEBUG] - 'ServerElement': 'ngOnChanges' is called. 'changes'=`, changes);
  }

  ngDoCheck() {
    console.log(`[DEBUG] - 'ServerElement': 'ngDoCheck' is called.`);
  }

  ngAfterContentInit() {
    console.log(`[DEBUG] - 'ServerElement': 'ngAfterContentInit' is called.`);
  }

  ngAfterContentChecked() {
    console.log(`[DEBUG] - 'ServerElement': 'ngAfterContentChecked' is called.`);
  }

  ngAfterViewInit() {
    console.log(`[DEBUG] - 'ServerElement': 'ngAfterViewInit' is called.`);
  }

  ngAfterViewChecked() {
    console.log(`[DEBUG] - 'ServerElement': 'ngAfterViewChecked' is called.`);
  }

  ngOnDestroy() {
    console.log(`[DEBUG] - 'ServerElement': 'ngOnDestroy' is called.`);
  }
}
