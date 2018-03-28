import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisableIfUnauthorizedDirective } from './disable-if-unauthorized.directive';
import { HideIfUnauthorizedDirective } from './hide-if-unauthorized.directive';


@NgModule({
  declarations: [
    AppComponent,
    DisableIfUnauthorizedDirective,
    HideIfUnauthorizedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
