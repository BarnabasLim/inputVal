import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StandardCardComponent } from './reusable-components/standard-card/standard-card.component';
import { StandardPanelComponent } from './reusable-components/standard-panel/standard-panel.component';
import { InputValStatusTableComponent } from './reusable-components/input-val-status-table/input-val-status-table.component';
import { ValidatorToggleComponent } from './reusable-components/validator-toggle/validator-toggle.component';

import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {InputSwitchModule} from 'primeng/inputswitch';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import {FieldsetModule} from 'primeng/fieldset';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';

import { S01StatusPropertiesComponent } from './components/s01-status-properties/s01-status-properties.component';
import { S02AngularValidatorsComponent } from './components/s02-angular-validators/s02-angular-validators.component';
import { BSubmitButtonComponent } from './reusable-components/b-submit-button/b-submit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    InputValStatusTableComponent,
    StandardCardComponent,
    StandardPanelComponent,
    S01StatusPropertiesComponent,
    S02AngularValidatorsComponent,
    ValidatorToggleComponent,
    BSubmitButtonComponent
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
    MenuModule,
    FieldsetModule,
    MessageModule,
    ToastModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
