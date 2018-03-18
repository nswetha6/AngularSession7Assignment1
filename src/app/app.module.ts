import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivesAsgnmntComponent } from './directives-asgnmnt/directives-asgnmnt.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesAsgnmntComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
