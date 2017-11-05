import { Car} from './classes/car.js';
import Drone from './classes/drone.js';
import { fleet} from './fleet-data.js';
import {FieldDataServices}  from  './services/field-data-services.js';
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

let dataservice = new FieldDataServices();
dataservice.loadData(fleet);

console.log('cars ', dataservice.cars , 'drones', dataservice.drones, 'errors' , dataservice.errors);