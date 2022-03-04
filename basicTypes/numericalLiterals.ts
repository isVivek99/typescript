//we are defining the type of return type of the function i.e -1 | 0 | 1
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
let res = compare('2', '3');
console.log(res);
// if the return type is any other value that defined types near the declaration an error is thrown
