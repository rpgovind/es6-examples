import {
    Car
} from './car.js';
import Drone from './drone.js';


let car = new Car('Honda');
let drone = new Drone('a1000', 'New one for test');
drone.fly();
Drone.getCompany();
//using setters to change Id
drone.id = 'a1001';
console.log(drone);

//invoking static method in child class and base class
Car.getCompany();
Drone.getCompany();