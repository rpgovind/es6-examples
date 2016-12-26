import { log as Logger, logTitle} from '../Logger'

import * as Math from './math'
import {add, multiply} from './math'

export default function () {
    let num1 = 10;
    let num2 = 5;
    logTitle('Multiple Named exports');
    Logger(num1 + ' + ' + num2 + ': ' + Math.add(num1, num2));
    Logger(num1 + ' - ' + num2 + ': ' + Math.subtract(num1, num2));
    Logger(num1 + ' * ' + num2 + ': ' + Math.multiply(num1, num2));
    Logger(num1 + ' / ' + num2 + ': ' + Math.divide(num1, num2));
    logTitle('Multiple Named exports(not everything - selective)');
    Logger(num1 + ' + ' + num2 + ': ' + add(num1, num2));
    Logger(num1 + ' * ' + num2 + ': ' + multiply(num1, num2));
}