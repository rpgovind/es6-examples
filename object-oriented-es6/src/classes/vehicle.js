export class Vehicle{
    constructor(license, model, latlong){
       this.license = license;
       this.model = model;
       this.latlong =  latlong;
    }
    start () {
        console.log('starting vehicle');
    }
    static getCompany() {
        console .log('Company ' + this.Company);
    }
}

//static property;
Vehicle.Company = '----Default---';