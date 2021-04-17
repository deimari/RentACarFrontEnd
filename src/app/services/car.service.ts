import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44318/api/";
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<CarResponseModel>{;
    let newUrl = this.apiUrl + "cars/getall";
    return this.httpClient.get<CarResponseModel>(newUrl);
  }
}
