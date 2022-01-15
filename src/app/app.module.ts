import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorService } from './core/interceptors/http-error.service';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { ButtonModule } from 'primeng-lts/button';
import { SpinnerComponent } from './core/layout/spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
