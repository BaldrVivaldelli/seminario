import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { GeneralScreenComponent } from './general-screen/general-screen.component';
import { ScreenUnoComponent } from './screen-uno/screen-uno.component';
import { ScreeDosComponent } from './screen-dos/screen-dos.component';
import { ScreeTresComponent } from './screen-tres/screen-tres.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { SideBarContainerComponent } from './side-bar-container/side-bar-container.component';
import { DispositivosListComponent } from './dispositivos-list/dispositivos-list.component';
import { DispositivoComponent } from './dispositivo/dispositivo.component';
import { DispositivoService } from './services/dispositivo.service'
import { HttpClientModule} from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    GeneralScreenComponent,
    ScreenUnoComponent,
    ScreeDosComponent,
    ScreeTresComponent,
    HeadSectionComponent,
    HomeLandingComponent,
    SideBarContainerComponent,
    DispositivosListComponent,
    DispositivoComponent        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DispositivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
