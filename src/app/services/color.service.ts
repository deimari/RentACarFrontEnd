import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44318/api/"
  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ColorResponseModel> {
    let newUrl = this.apiUrl + "colors/getall";
    return this.httpClient.get<ColorResponseModel>(newUrl);
  }
}
