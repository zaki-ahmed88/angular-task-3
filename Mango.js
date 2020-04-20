"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var veggies_1 = require("./veggies");
//Concrete Subject
//Set Price for specific product
var Mango = /** @class */ (function (_super) {
    __extends(Mango, _super);
    function Mango(price) {
        return _super.call(this, price) || this;
    }
    return Mango;
}(veggies_1.Veggies));
exports.Mango = Mango;
