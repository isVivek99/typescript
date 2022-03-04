function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
var res = compare('2', '3');
console.log(res);
