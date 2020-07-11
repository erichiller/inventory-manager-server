import { flatArrayObjectProperty } from "~lib/UtilityFunctions";

let arr = [
     {
         propA: [ 1 , 2 , 3]
     },
     {
         propA: 4
     },
     {
         propA: [5 , 6]
     }
];
// should be `let test: number[]`
test('check that flatArrayObjectProperty output is correct', () => {
  expect(flatArrayObjectProperty(arr, 'propA')).toBe([1,2,3,4,5,6]);
});