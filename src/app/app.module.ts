import { HeaderComponent } from './core/components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { QuoteCardComponent } from './core/components/quote-card/quote-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    QuoteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
