class Animals {
  move() {
    console.log('dog moves 3 steps');
  }
}

class Dog extends Animals {
  woof(times: number) {
    for (let i = 0; i < 3; i++) {
      console.log('time:', i);
    }
  }
}

let pupper = new Dog();
pupper.move();
pupper.woof(3);
