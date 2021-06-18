import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../components/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carsUrl = 'http://92.253.239.109/api/v1/cars'
  constructor(private http:HttpClient) { }
  getCars():Observable<Car[]>{
    return this.http.get<Car[]>(this.carsUrl);
  }
  postCar(car:Car){
    return this.http.post(this.carsUrl,car);
  }
}
