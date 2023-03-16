import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/models/medicine.model';
import { MedicinesService } from 'src/app/services/medicines.service';

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.css']
})
export class MedicinesListComponent implements OnInit {

  medicines: Medicine[] = [];

  constructor(private medicinesService: MedicinesService){}

  ngOnInit(): void{
    this.medicinesService.getAllMedicines()
    .subscribe({
      next: (medicines) => {
        // console.log(medicines);
        this.medicines = medicines;

      },
      error: (response) =>
      {
        console.log(response);
      }
    })
  }
}
