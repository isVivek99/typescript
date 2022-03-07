// class MyClass2 {
//   name = 'myClass';
//   getName() {
//     return this.name;
//   }
// }
// const c = new MyClass2();
// const obje = {
//   name: 'vivek',
//   getname: c.getName,
// };
// console.log(obje.getname());
var MyClass2 = /** @class */ (function () {
    function MyClass2() {
        var _this = this;
        this.name = 'myClass';
        this.getName = function () {
            return _this.name;
        };
    }
    return MyClass2;
}());
var c = new MyClass2();
var obje = {
    name: 'vivek',
    getname: c.getName
};
console.log(obje.getname());
