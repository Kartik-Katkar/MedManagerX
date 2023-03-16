import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine.model';
import { MedicinesService } from 'src/app/services/medicines.service';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css'],
})
export class EditMedicineComponent implements OnInit {
  medicineDetails: Medicine = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    cost: 0,
    type: '',
  };

  constructor(
    private route: ActivatedRoute,
    private medicineService: MedicinesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          //call API
          this.medicineService.getMedicine(id).subscribe({
            next: (response) => {
              this.medicineDetails = response;
            },
          });
        }
      },
    });
  }

  updateMedicine() {
    this.medicineService
      .updateMedicine(this.medicineDetails.id, this.medicineDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['medicines']);
        },
      });
  }
  deleteMedicine(id: string) {
    this.medicineService.deleteMedicine(id).subscribe({
      next: (response) => {
        this.router.navigate(['medicines']);
      },
    });
  }
}
