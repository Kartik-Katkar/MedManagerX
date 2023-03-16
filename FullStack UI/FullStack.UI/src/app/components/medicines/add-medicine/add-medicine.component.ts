import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine.model';
import { MedicinesService } from 'src/app/services/medicines.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit{
  
  addMedicineRequest: Medicine = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    cost: 0,
    type: ''
  };
  constructor(private medicineService: MedicinesService,private router: Router){}

  ngOnInit(): void {
    
}

addMedicine(){
  this.medicineService.addMedicine(this.addMedicineRequest).subscribe({
    next: (medicine)=>{
      this.router.navigate(['medicines']);
    }
  });
}
}
