import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../components/app.component';
import { FooterComponent } from '../components/footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
