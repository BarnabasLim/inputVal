import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StandardCardComponent } from './components/standard-card/standard-card.component';
import { StandardPanelComponent } from './components/standard-panel/standard-panel.component';

import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { InputValStatusTableComponent } from './components/input-val-status-table/input-val-status-table.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
@NgModule({
  declarations: [
    AppComponent,
    InputValStatusTableComponent,
    StandardCardComponent,
    StandardPanelComponent
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
    PanelModule,
    MenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
