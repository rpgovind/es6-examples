import { Vehicle } from './vehicle.js';
class Car extends Vehicle{
    constructor(name){
        console.log('constructor in car.js');
        super('LICE - ' + name);
    }
}
// Using named exports
export { Car};
