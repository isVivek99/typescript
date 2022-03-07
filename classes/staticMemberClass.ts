class MyClass {
  y: number = 0;
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}

const objectStatic = new MyClass();
console.log(objectStatic.y, MyClass.x);
MyClass.printX();
