import { Vehicle } from './vehicle.js';
class Car extends Vehicle{
    constructor(license, model, latlong){
        console.log('constructor in car.js');
        super(license, model, latlong);
        this.miles =  null;
        this.make = null;
    }
}
// Using named exports
export { Car};
