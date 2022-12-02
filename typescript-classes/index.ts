import Automobile, { Truck } from './Automobile';

let myCar = new Automobile(2007, "Ford", "Escape");
let myTruck = new Truck(1986, 'Chevy', 'S-10', 'extended', 'v6');

myCar.printDetails('SUV');
myTruck.printDetails('truck');
