import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotelistComponent } from './quotelist/quotelist.component';
import { QlistviewComponent } from './qlistview/qlistview.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotelistComponent,
    QlistviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
