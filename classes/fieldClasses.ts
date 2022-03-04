class Point {
  x: number;
  y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;

class UserAccount1 {
  name: string;
  accountType: 'user';

  constructor(name: string) {
    this.name = name;
  }
}
let user1 = new UserAccount1('vivek');
console.log(user1.accountType);
