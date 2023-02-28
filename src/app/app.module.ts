import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityCardComponent } from './utility-card/utility-card.component';
import { ItemPickerComponent } from './item-picker/item-picker.component';
import { NumberPickerComponent } from './number-picker/number-picker.component';
import { UtilitySelectorComponent } from './utility-selector/utility-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WheelSpinnerComponent } from './wheel-spinner/wheel-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilityCardComponent,
    ItemPickerComponent,
    NumberPickerComponent,
    UtilitySelectorComponent,
    WheelSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
