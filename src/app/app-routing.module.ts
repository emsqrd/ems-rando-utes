import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPickerComponent } from './item-picker/item-picker.component';
import { NumberPickerComponent } from './number-picker/number-picker.component';
import { UtilitySelectorComponent } from './utility-selector/utility-selector.component';

const routes: Routes = [
  { path: '', component: UtilitySelectorComponent },
  { path: 'wheelspinner', component: ItemPickerComponent },
  { path: 'numberpicker', component: NumberPickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
