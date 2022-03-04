const constantString = 'Hello World';
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;

let x: 'Hello' = 'Hello';
//since we declared x as type `hello` we cannot redeclare it as any other string
x = 'Hello';
