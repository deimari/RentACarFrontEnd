import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetailDto[] = [];
  carImages: CarImage[];
  carId: number;
  dataLoaded: boolean = false;
  imgUrl: string = 'https://localhost:44318/uploads/';
  constructor(
    private carDetailService: CarDetailService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getImagesByCarId(params['carId']);
      } else if (params['brandId']) {
        this.getCarDetailsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarDetailsByColor(params['colorId']);
      } else {
        this.getCarDetails();
      }
    });
  }

  getCarDetails() {
    this.carDetailService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarDetailsByBrand(id: number) {
    this.carDetailService.getCarsByBrand(id).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByColor(id: number) {
    this.carDetailService.getCarsByColor(id).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
