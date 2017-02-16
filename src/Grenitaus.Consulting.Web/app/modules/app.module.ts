import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../components/app.component';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { AboutComponent } from '../components/about.component';
import { HomeComponent } from '../components/home.component';
import { AppRoutingModule } from './app-routing.module';

//Added this import and the providers configuration to fix refresh 404 errors
//http://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-browser
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule ],
  declarations: [AppComponent, HeaderComponent, FooterComponent, AboutComponent, HomeComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
