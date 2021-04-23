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

  getCarsByBrand(id: number): Observable<ListResponseModel<CarDetailDto>> {
    let newUrl = this.apiUrl + "getbybrandid?id=" + id;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newUrl);
  }

  getCarsByColor(id: number): Observable<ListResponseModel<CarDetailDto>> {
    let newUrl = this.apiUrl + "getbycolorid?id=" + id;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newUrl);
  }
}
