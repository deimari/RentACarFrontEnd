import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrandId: number;
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    });
  }

  getBrandClass(brand: Brand) {
    if (brand.id == this.currentBrandId) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllBrandClass() {
    if (this.currentBrandId < 1 || !this.currentBrandId) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  setCurrentBrandId(brandId: number) {
    this.currentBrandId = brandId;
  }
}
