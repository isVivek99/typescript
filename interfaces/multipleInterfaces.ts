interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: 'red',
  radius: 10,
};
console.log('cc:', cc);
