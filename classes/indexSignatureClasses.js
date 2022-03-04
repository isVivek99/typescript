var treasure1 = {
    profit: 100000,
    yearlyTreasure: 20000
};
var treasure2 = {
    contractTreasure: 110000
};
function totalTreasure(obj) {
    var total = 0;
    for (var name_1 in obj) {
        total += obj[name_1];
    }
    return total;
}
console.log(totalTreasure(treasure1));
console.log(totalTreasure(treasure2));
