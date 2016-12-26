import pi from './pi'
import api from './api'
import Person from './person'
import { log as Logger, logTitle} from '../Logger'


export default function () {
    logTitle('Single Default Exports(class)');

    Logger('import pi value :' + pi)
    Logger(api('George Michael'));
    let principal = new Person('George', 'Michael', 60);
    Logger( principal.sayfullName());
    let teacher = new Person('Linda', 'Hiles', 30);
}