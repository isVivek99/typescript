var Greeter = /** @class */ (function () {
    function Greeter(otherName) {
        this.name = 'world';
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    return Greeter;
}());
var g = new Greeter('new world');
// g.name = 'also not ok';
console.log(g);
