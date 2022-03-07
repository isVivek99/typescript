var MyClass = /** @class */ (function () {
    function MyClass() {
        this.y = 0;
    }
    MyClass.printX = function () {
        console.log(MyClass.x);
    };
    MyClass.x = 0;
    return MyClass;
}());
var objectStatic = new MyClass();
console.log(objectStatic.y, MyClass.x);
MyClass.printX();
