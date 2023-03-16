import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicine } from '../models/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllMedicines(): Observable<Medicine[]>{
   
    return this.http.get<Medicine[]>(this.baseApiUrl + '/api/medicines')

  }

  addMedicine(addMedicineRequest: Medicine): Observable<Medicine>{
    addMedicineRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Medicine>(this.baseApiUrl + '/api/medicines',addMedicineRequest);
  }

  getMedicine(id: string): Observable<Medicine>
  {
    return this.http.get<Medicine>(this.baseApiUrl + '/api/medicines/' + id)
  }

  updateMedicine(id: string,updateMedicineRequest: Medicine): Observable<Medicine> {
   return this.http.put<Medicine>(this.baseApiUrl + '/api/medicines/' + id,updateMedicineRequest)
  }
  deleteMedicine(id: string): Observable<Medicine> {
   return this.http.delete<Medicine>(this.baseApiUrl + '/api/medicines/' + id)
  }
}
