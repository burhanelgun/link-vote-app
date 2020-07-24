import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkListItemComponent } from './link-list-item/link-list-item.component';
import { SubmitALinkComponent } from './submit-a-link/submit-a-link.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module'; 
import {MatInputModule} from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    LinkListComponent,
    LinkListItemComponent,
    SubmitALinkComponent
  ],
  imports: [
    AppRoutingModule ,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
