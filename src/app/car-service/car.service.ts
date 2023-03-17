import {Injectable} from '@angular/core';
import {Car, CarManufacturer} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  nextId: number=1;
carList : Map<number,Car> = new Map<number,Car>();
  constructor() {
 // this.carList.push({
   // id: 1,
    //name: 'Samochod',
    //manufacturer: CarManufacturer.FORD,
    //model: 'Puma',
    //engineCapacity: 1.7
 // })
  }
 addCar(car: Car){
    car.id = this.nextId++;
  console.log("Adding car: " + car)
   this.carList.set(car.id,car)
  }
  deleteCarFromService(carId:number){
    console.log('Deleting car: '+ carId);
    this.carList.delete(carId);
  }
}
