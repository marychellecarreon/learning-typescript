"use strict";
var Greater = /** @class */ (function () {
    function Greater() {
    }
    Greater.prototype.sayHello = function () {
        console.log("Hello" + name);
    };
    return Greater;
}());
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
sortByName([]);
