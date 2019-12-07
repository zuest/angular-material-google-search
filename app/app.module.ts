import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MdAutocompleteModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BoldPipe } from './bold.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // material modules
    MdAutocompleteModule,
  ],
  declarations: [
    AppComponent,
    BoldPipe,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
