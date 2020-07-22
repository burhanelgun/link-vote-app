import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkListItemComponent } from './link-list-item/link-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkListComponent,
    LinkListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
