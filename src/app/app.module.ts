import { CarComponent } from './components/car/car.component';
import { CarsListComponent } from './components/carsList/carsList.component';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { CarInputComponent } from './components/carInput/carInput.component';



@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarInputComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
