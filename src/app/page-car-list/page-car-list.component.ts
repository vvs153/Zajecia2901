import { Component } from '@angular/core';
import {CarService} from "../car-service/car.service";
import {Car} from "../model/car";

@Component({
  selector: 'app-page-car-list',
  templateUrl: './page-car-list.component.html',
  styleUrls: ['./page-car-list.component.css']
})
export class PageCarListComponent {
  displayedColumns: string[] = [
    'car-col-id',
    'car-col-name',
    'car-col-manufacturer',
    'car-col-model',
    'car-col-capacity',
    'car-col-buttons'
  ]
  carList: Car[] = []
  constructor(protected carService:CarService) {
    //odswiezenie stanu listy
    //skopiuj wartosci z mapy
    this.carList=[...carService.carList.values()]
  }
 deleteCar(carId: number){
    this.carService.deleteCarFromService(carId)
   this.carList=[...this.carService.carList.values()]
 }
}
