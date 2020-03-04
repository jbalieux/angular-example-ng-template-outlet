import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DisplayComponent } from './display/display.component';
import { SiInnerTemplateDirective } from './list/inner-template.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SiInnerTemplateDirective,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
