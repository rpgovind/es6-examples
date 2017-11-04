class Drone {

    //constructor
    constructor(id, name){
        this._id = id;
        this.name = name;
        console.log('in Drone constructor' , Drone. Maxheight);
    }

    fly() {
        console.log('Drone ' + this.id + 'is flying');
    }
    static getCompany() {
        //can access static property
        console.log('getCompany ' + this.Maxheight);
    }

    //getters and settters
    get id() {
        return this._id;
    }

    set id(value) {
        this._id =  value;
    }
}
 //static properties
 Drone.Maxheight = 2000;
 Drone.getCompany();
let drone = new Drone('a123', 'George');
drone.fly();

drone.id  ='a1000';
console.log(drone._id + ' ' +drone.id);
