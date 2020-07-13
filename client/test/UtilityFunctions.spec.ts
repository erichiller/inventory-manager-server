// import { flatArrayObjectProperty } from "~lib/UtilityFunctions";

// https://www.npmjs.com/package/jest-fetch-mock
require('jest-fetch-mock').enableMocks();


import { QtyInput } from "~lib/Item/Common/QtyInput";
import { enumerable } from "~lib/UtilityFunctions";



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
// test( 'check that flatArrayObjectProperty output is correct', () => {
//   expect( flatArrayObjectProperty( arr, 'propA' ) ).toBe( [1,2,3,4,5,6] );
// } );

// test( ' ', () => {
//     expect( true ).toBe( true );
// })


class TestClass {

    @enumerable( true )
    get prop1(): string {
        return "hello";
    }

}


test( ' ', () => {
    expect( true ).toBe( true );
})



