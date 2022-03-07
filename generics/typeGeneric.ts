type stringArr = Array<string>;
let newStringArray: stringArr = ['vivek', 's'];
type numArr = Array<number>;
let newNumberArray: numArr = [1, 2, 3, 4, 5];

const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);
const m = last(['1', '2', '3']);

const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, 6); //type number[]
const v2 = makeArr<string | null, number>('viv', 6); //type string|number []

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  };
};

let v1 = makeFullName({
  firstName: 'vivek',
  lastName: 'lokhande',
  alt: 'ned',
});

console.log(v1);
v1.fullName;
