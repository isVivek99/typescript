type Pointer = {
  x: number;
  y: number;
};

function printCo(pt: Pointer) {
  console.log(`${pt.x} and ${pt.y}`);
}

printCo({ x: 10, y: 20 });
