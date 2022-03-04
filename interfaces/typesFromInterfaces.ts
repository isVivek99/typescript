interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircleNew = Colorful & Circle;

function draw(circle: ColorfulCircleNew) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: 'blue', radius: 21 });
