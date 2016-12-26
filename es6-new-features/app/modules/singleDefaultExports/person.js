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
       console.log(`firstname :${this.firstname} lastname :${this.lastname} age: ${this.age}`);
   }
}