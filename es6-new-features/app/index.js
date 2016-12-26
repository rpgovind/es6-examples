import pi from './modules/singleDefaultExports/pi'
import api from './modules/singleDefaultExports/api'
import Person from './modules/singleDefaultExports/person'

console.log('import pi value :'+ pi)
console.log(api('George Michael'));

let principal = new Person('George', 'Michael', 60);
principal.sayfullName();
let teacher = new Person('Linda', 'Hiles', 30);