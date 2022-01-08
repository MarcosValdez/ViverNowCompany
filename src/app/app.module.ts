import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TestprimengComponent } from './components/testprimeng/testprimeng.component';

import { CalendarModule } from 'primeng-lts/calendar';
import { ButtonModule } from 'primeng-lts/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TestprimengComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
