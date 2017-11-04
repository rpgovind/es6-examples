import {
    Vehicle
} from './vehicle.js';

class Drone extends Vehicle {
    //constructor
    constructor(id, name) {
        console.log('in Drone constructor', Drone.Maxheight);
        super('LICE - ' + name);
        this.gpsEnabled = false;
        this._id = id;
        this.name = name;
    }

    fly() {
        console.log('Drone ' + this._id + 'is flying');
    }
    static getCompany() {
        //can access static property
        console.log('getCompany ' + this.Maxheight);
    }

    // getters and settters
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}

//static properties
Drone.Maxheight = 2000;

// Using the default export
export default Drone;