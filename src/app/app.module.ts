import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StandardFormComponent } from './standard-form/standard-form.component';

import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { InputValStatusTableComponent } from './input-val-status-table/input-val-status-table.component';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  declarations: [
    AppComponent,
    StandardFormComponent,
    InputValStatusTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    ButtonModule,
    CardModule,
    InputTextModule,
    TableModule,
    InputSwitchModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
