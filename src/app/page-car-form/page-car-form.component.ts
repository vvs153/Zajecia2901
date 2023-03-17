import {Component} from '@angular/core';
import {Car, car_default, CarManufacturer} from "../model/car";
import {CarService} from "../car-service/car.service";

@Component({
  selector: 'app-page-car-form',
  templateUrl: './page-car-form.component.html',
  styleUrls: ['./page-car-form.component.css']
})
export class PageCarFormComponent {
  carModel: Car;
  constructor(protected carService:CarService) {
    this.carModel=Object.assign({}, car_default)
  }
  getAllCarManufacturers() : string[]{
    return Object.values(CarManufacturer)
  }

  clear(){
    this.carModel = Object.assign({},car_default)
  }

  submit(){
    this.carService.addCar(this.carModel)
    this.clear()
  }
}
