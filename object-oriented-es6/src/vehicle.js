export class Vehicle{
    constructor(licenseNum){
        this.licenseNum  =  licenseNum;
        this.gpsEnabled = true;
        console.log('creating instance of Vehicle' , this);
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