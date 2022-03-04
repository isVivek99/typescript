const treasure1 = {
  profit: 100_000,
  yearlyTreasure: 20_000,
};

const treasure2 = {
  contractTreasure: 110_000,
};

function totalTreasure(obj: { [x: string]: number }) {
  let total = 0;
  for (const name in obj) {
    total += obj[name];
  }
  return total;
}

console.log(totalTreasure(treasure1));
console.log(totalTreasure(treasure2));
