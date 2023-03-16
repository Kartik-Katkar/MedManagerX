import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './components/medicines/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './components/medicines/edit-medicine/edit-medicine.component';
import { MedicinesListComponent } from './components/medicines/medicines-list/medicines-list.component';

const routes: Routes = [
  {
    path: '',
    component: MedicinesListComponent
  },
  {
    path: 'medicines',
    component: MedicinesListComponent
  },
  {
    path: 'medicines/add',
    component: AddMedicineComponent
  },
  {
    path: 'medicines/edit/:id',
    component: EditMedicineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
