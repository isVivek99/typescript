// const addUID = <R>(obj: R) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let docOne = addUID({ name: "vivek", age: "23" });
// let docTwo = addUID({ name: "vivek", futureAge: "23" });
// console.log(docOne.name);
// here TS doesnt know what kind of object is being passed in hence the error

// ---------

const addUID = <R>(obj: R) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "vivek", age: "23" });
console.log(docOne.name);
