"use strict";
exports.__esModule = true;
var Automobile_1 = require("./Automobile");
var myCar = new Automobile_1["default"](2007, "Ford", "Escape");
var myTruck = new Automobile_1.Truck(1986, 'Chevy', 'S-10', 'extended', 'v6');
myCar.printDetails('SUV');
myTruck.printDetails('truck');
