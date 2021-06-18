import { CarsService } from './../../services/cars.service';
import { Car } from './../models/car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carsList',
  templateUrl: './carsList.component.html',
  styleUrls: ['./carsList.component.scss']
})
export class CarsListComponent implements OnInit {

  carsArray:Car[]=[];
  error:string;

  constructor(private http:CarsService) { }

  ngOnInit() {
    this.http.getCars().subscribe(value=>{
      for (let element of value){
        // last element API will be first on screen
        this.carsArray.unshift(element)
      }},
      error=>{this.error=`Error ${error.status} Url ${error.url}`;  console.log(this.error);}
      )
    }
}
