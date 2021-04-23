import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColorId: number;
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    });
  }

  getColorClass(color: Color){
    if (color.id == this.currentColorId) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllColorClass() {
    if (this.currentColorId < 0 || !this.currentColorId) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  setCurrentColorId(colorId: number){
    this.currentColorId = colorId;
  }
}
