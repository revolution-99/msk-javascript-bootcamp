/*
Maps and then returns a flattened array
*/

const num = [1, [2], 4];

console.log(num.flatMap((e) => e * 2));
// [ 1, 2, 4 ]
