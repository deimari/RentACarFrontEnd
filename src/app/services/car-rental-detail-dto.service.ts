import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarRentalDetailDto } from '../models/carRentalDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarRentalDetailDtoService {
  apiUrl = "https://localhost:44318/api/"
  constructor(private httpClient: HttpClient) {}

  getRentalDetails(): Observable<ListResponseModel<CarRentalDetailDto>> {
    let newUrl = this.apiUrl + "rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<CarRentalDetailDto>>(newUrl);
  }
}
