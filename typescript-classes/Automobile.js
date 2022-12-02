"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Truck = void 0;
var Automobile = /** @class */ (function () {
    function Automobile(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
    }
    Automobile.prototype.printDetails = function (vehicle) {
        console.log("This " + vehicle + " is a " + this.year + " " + this.make + " " + this.model + ".");
    };
    return Automobile;
}());
exports["default"] = Automobile;
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(year, make, model, cabStyle, engine) {
        var _this = _super.call(this, year, make, model) || this;
        _this.cabStyle = cabStyle;
        _this.engine = engine;
        _this.paintColor = ''; // must be assigned for the first time
        _this.interior = '';
        _this.misc = [];
        return _this;
    }
    Truck.prototype.printDetails = function (vehicle) {
        var details = "This " + vehicle + " is a " + this.year + " " + this.make + " " + this.model + ". It has a " + this.cabStyle + " cab and a " + this.engine + " engine";
        if (this.paintColor && this.interior) {
            details += " with " + this.paintColor + " paint and " + this.interior + " interior.";
        }
        else {
            details += '.';
        }
        console.log(details);
    };
    return Truck;
}(Automobile));
exports.Truck = Truck;
