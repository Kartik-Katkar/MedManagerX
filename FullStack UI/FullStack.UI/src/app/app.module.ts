import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicinesListComponent } from './components/medicines/medicines-list/medicines-list.component';
import { AddMedicineComponent } from './components/medicines/add-medicine/add-medicine.component';
import { FormsModule } from '@angular/forms';
import { EditMedicineComponent } from './components/medicines/edit-medicine/edit-medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicinesListComponent,
    AddMedicineComponent,
    EditMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
