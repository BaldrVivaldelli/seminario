import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { SiderMenuComponent } from './sider-menu/sider-menu.component';
import { DispositivosListComponent } from './dispositivos-list/dispositivos-list.component';
import { DispositivoComponent } from './dispositivo/dispositivo.component';
import { DispositivoService } from './Services/dispositivos.service';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeLandingComponent,
    SiderMenuComponent,
    DispositivosListComponent,
    DispositivoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, DispositivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
