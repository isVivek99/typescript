class Base {
  greet() {
    console.log('Hello, world!');
  }
}

class Derived extends Base {
  super: any;

  greet(name?: string) {
    if (name) {
      console.log(`hello ${name}`);
    } else {
      super.greet();
    }
  }
}

const d = new Derived();
d.greet('vivek'); // hello vivek
d.greet(); //hello world!

const b: Base = d;
b.greet();
// b.greet('civek'); //error
