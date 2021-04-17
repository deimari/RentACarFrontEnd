import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:44318/api/"
  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<CustomerResponseModel> {
    let newUrl = this.apiUrl + "customers/getall";
    return this.httpClient.get<CustomerResponseModel>(newUrl);
  }
}
