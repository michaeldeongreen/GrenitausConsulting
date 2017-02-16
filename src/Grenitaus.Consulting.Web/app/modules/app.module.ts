import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../components/app.component';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { AboutComponent } from '../components/about.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
