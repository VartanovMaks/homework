import { CarsService } from './../../services/cars.service';
import { Car } from './../models/car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carsList',
  templateUrl: './carsList.component.html',
  styleUrls: ['./carsList.component.scss']
})
export class CarsListComponent implements OnInit {

  carsArray:Car[];

  constructor(private http:CarsService) { }

  ngOnInit() {
    this.http.getCars().subscribe(value=>this.carsArray = value)
  }

}
