import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpErrorComponent } from './http-error.component';
import { AppComponent } from './app.component';
import { PageComponent } from './page.component';

import { ApiErrorsInterceptor } from './api-errors.interceptor';



@NgModule({
  declarations: [
    PageComponent,
    HttpErrorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,

    HttpClientModule,

    RouterModule.forRoot([
      { path: 'home', component: PageComponent },
      { path: 'http-error', component: HttpErrorComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorsInterceptor, multi: true }
  ],

})
export class AppRoutingModule {}


