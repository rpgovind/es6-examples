import {Car}  from '../classes/car.js';
import Drone from '../classes/drone.js';
import {DataError}  from  './data-error.js'
export class FieldDataServices {
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    //instance method
    loadData(fleet) {
        for (let item of fleet) {
            switch (item.type) {
                case "car":
                    let car = this.loadcar(item);
                    this.cars.push(car);
                    break;
                case "drone":
                    let drone  = this.loadDrone(item);
                    this.drones.push(drone);
                    break;
                default:
                    this.errors.push( new DataError('Invalid type', item));
            }
        }
    }

    loadcar(car) {
        try {
            let newCar = new Car(car.license, car.model, car.latlong)
            newCar.make = car.make;
            newCar.miles = car.miles;
            return newCar;
        } catch (error) {
            this.errors.push(new DataError('Invalid car ', car));
        }
        return null;
    }

    loadDrone(drone) {
        try {
            let newDrone = new Drone(drone.license, drone.model, drone.latlong)
            newDrone.airTimehours = drone.airTimehours;
            newDrone.base = drone.base;
            return newDrone;
        } catch (error) {
            this.errors.push(new DataError('Invalid drone ', drone));
        }
       return null;
    }
}