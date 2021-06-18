import { NgForm } from '@angular/forms';
import { CarsService } from './../../services/cars.service';
import { Car } from './../models/car';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carInput',
  templateUrl: './carInput.component.html',
  styleUrls: ['./carInput.component.scss']
})
export class CarInputComponent implements OnInit {

  car:Car={
      model:'',
      year:NaN,
      price:NaN
  }

  constructor(private http:CarsService) {}

  ngOnInit(): void {}

  submit(form:NgForm) {
    if (form.valid) {
      this.http.postCar(this.car).subscribe(value=>console.log('posted car',value),
          error=>{console.log(`Error ${error.status} Url ${error.url}`)
                  console.log(error);
        }
      )
    }
  }
  eraseInput(){
    this.car={
      model:'',
      year:NaN,
      price:NaN
    }
  }

}
