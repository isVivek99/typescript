function* generateDate(timestamp: number, intervalInMillis: number) {
  let increment = 0;
  while (true) {
    increment += 1;
    const timeIncrement = increment * intervalInMillis;
    yield new Date(timestamp + timeIncrement);
  }
}

const start = new Date('2020-11-29T00:00:00.000Z').getTime();
const oneMinuteInMillis = 60_000;
const generator = generateDate(start, oneMinuteInMillis);
console.log(generator.next());
console.log(generator.next());

const numbers = [1, 2, 3];

const numbersIterator = numbers[Symbol.iterator]();
console.log(numbersIterator.next());
console.log(numbersIterator.next());

for (const n of numbers) {
  console.log(n);
}
