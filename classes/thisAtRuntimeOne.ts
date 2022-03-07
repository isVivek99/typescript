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

class MyClass2 {
  name = 'myClass';
  getName = () => {
    return this.name;
  };
}

const c = new MyClass2();

const obje = {
  name: 'vivek',
  getname: c.getName,
};

console.log(obje.getname());
