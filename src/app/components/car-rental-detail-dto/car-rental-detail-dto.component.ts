import { Component, OnInit } from '@angular/core';
import { CarRentalDetailDto } from 'src/app/models/carRentalDetailDto';
import { CarRentalDetailDtoService } from 'src/app/services/car-rental-detail-dto.service';

@Component({
  selector: 'app-car-rental-detail-dto',
  templateUrl: './car-rental-detail-dto.component.html',
  styleUrls: ['./car-rental-detail-dto.component.css']
})
export class CarRentalDetailDtoComponent implements OnInit {
  carRentalDetails: CarRentalDetailDto[] = [];
  constructor(private carRentalDetailService: CarRentalDetailDtoService) { }

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails(){
    this.carRentalDetailService.getRentalDetails().subscribe(response => {
      this.carRentalDetails = response.data;
    });
  }
}
