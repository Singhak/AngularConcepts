import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FetchJsonPipe } from './fetch-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FetchJsonPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
