import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarRentalDetailDtoResponseModel } from '../models/carRentalDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarRentalDetailDtoService {
  apiUrl = "https://localhost:44318/api/"
  constructor(private httpClient: HttpClient) {}

  getRentalDetails(): Observable<CarRentalDetailDtoResponseModel> {
    let newUrl = this.apiUrl + "rentals/getrentaldetails"
    return this.httpClient.get<CarRentalDetailDtoResponseModel>(newUrl);
  }
}
