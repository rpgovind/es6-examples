export default class Person{
    constructor(firstname , lastname, age){
        this.firstname = firstname,
        this.lastname = lastname,
        this.age = age;
    }
    
   fullName(){
       return  this.firstname + ' ' + this.lastname;
   }
   sayfullName(){
       return (`FirstName : ${this.firstname} , LastName : ${this.lastname} , Age: ${this.age}`);
   }
}