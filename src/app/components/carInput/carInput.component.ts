import { Car } from './../models/car';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}

  submit() {

    console.log(this.car);

  }
  eraseInput(){
    this.car={
      model:'',
      year:NaN,
      price:NaN
    }
  }

}
