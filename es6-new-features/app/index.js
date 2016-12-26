import pi from './modules/singleDefaultExports/pi'
import api from './modules/singleDefaultExports/api'
import Person from './modules/singleDefaultExports/person'

import * as Math from './modules/multipleNamedexports/math'

import {add, multiply} from './modules/multipleNamedexports/math'


console.log('import pi value :'+ pi)
console.log(api('George Michael'));

let num1 =10;
let num2=5;
console.log('==========multipleNamedexports=====');
console.log(num1 + ' + ' + num2 + ': ' + Math.add(num1, num2));
console.log(num1 + ' - ' + num2 + ': ' +Math.subtract(num1, num2));
console.log(num1 + ' * ' + num2 + ': ' +Math.multiply(num1, num2));
console.log(num1 + ' / ' + num2 + ': ' +Math.divide(num1, num2));


console.log('==========multipleNamedexports(not everything - selective)=====');
console.log(num1 + ' + ' + num2 + ': ' + add(num1, num2));

console.log(num1 + ' * ' + num2 + ': ' + multiply(num1, num2));

console.log('==========singleDefaultExports(class)=====');
let principal = new Person('George', 'Michael', 60);
principal.sayfullName();
let teacher = new Person('Linda', 'Hiles', 30);