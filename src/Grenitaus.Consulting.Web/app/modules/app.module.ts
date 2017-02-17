import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../components/app.component';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { AboutComponent } from '../components/about.component';
import { HomeComponent } from '../components/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule ],
  declarations: [AppComponent, HeaderComponent, FooterComponent, AboutComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
