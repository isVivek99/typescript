function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
var array = wrapInArray("vivek");
console.log("array:", array);
