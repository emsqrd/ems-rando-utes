import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityCardComponent } from './utility-card/utility-card.component';
import { NamePickerComponent } from './name-picker/name-picker.component';
import { NumberPickerComponent } from './number-picker/number-picker.component';
import { UtilitySelectorComponent } from './utility-selector/utility-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UtilityCardComponent,
    NamePickerComponent,
    NumberPickerComponent,
    UtilitySelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
