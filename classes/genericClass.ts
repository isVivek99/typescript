class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}

const box1 = new Box('chocolate box');
console.log(box1.contents);
