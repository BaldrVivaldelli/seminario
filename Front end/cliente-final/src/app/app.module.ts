import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { GeneralScreenComponent } from './general-screen/general-screen.component';
import { ScreenUnoComponent } from './screen-uno/screen-uno.component';
import { ScreenDosComponent } from './screen-dos/screen-dos.component';
import { ScreenTresComponent } from './screen-tres/screen-tres.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralScreenComponent,
    ScreenUnoComponent,
    ScreenDosComponent,
    ScreenTresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
