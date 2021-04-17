import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDtoResponseModel } from '../models/carDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = "https://localhost:44318/api/";
  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<CarDetailDtoResponseModel> {
    let newUrl = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<CarDetailDtoResponseModel>(newUrl);
  }
}
