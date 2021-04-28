import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = "https://localhost:44318/api/cars/";
  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newUrl = this.apiUrl + "getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newUrl);
  }

  getCarsByBrand(brandName: string): Observable<ListResponseModel<CarDetailDto>> {
    let newUrl = this.apiUrl + 'getdetailsbybrandname?brandName=' + brandName;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newUrl);
  }

  getCarsByColor(colorName: string): Observable<ListResponseModel<CarDetailDto>> {
    let newUrl = this.apiUrl + 'getdetailsbycolorname?colorName=' + colorName;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newUrl);
  }
}
