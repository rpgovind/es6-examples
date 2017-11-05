import {
    Vehicle
} from './vehicle.js';

class Drone extends Vehicle {
    //constructor
    constructor(license, model, latlong) {
        console.log('in Drone constructor', Drone.Maxheight);
       super(license, model, latlong);
       this.airTimehours = null;
       this.base = null;
    }

    fly() {
        // console.log('Drone ' + this. + 'is flying');
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