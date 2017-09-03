import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputPanelComponent } from './input-panel/input-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Imported @angular/forms/FormsModule, because I need to get 2 way data binding working.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
