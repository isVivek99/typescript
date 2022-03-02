function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}
let array = wrapInArray("vivek");
console.log("array:", array);
