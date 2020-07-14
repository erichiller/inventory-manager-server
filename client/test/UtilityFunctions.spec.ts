// import { flatArrayObjectProperty } from "~lib/UtilityFunctions";

// https://www.npmjs.com/package/jest-fetch-mock
// api.test.ts

// import fetch from 'node-fetch';
import { mocked } from 'ts-jest/utils';



global.fetch = jest.fn( () =>
    Promise.resolve( {
        json: () => Promise.resolve( { } ),
    } ) as any
);


beforeEach( () => {
    mocked( fetch ).mockClear();
} );

// import { QtyInput } from "~lib/Item/Common/QtyInput";
// import { enumerable } from "~lib/UtilityFunctions";



function enumerable ( value: boolean ) {
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        descriptor.enumerable = value;
    };
}



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
} );

test( ' ', () => {
    expect( new TestClass().prop1 ).toBe( "hello" );
} )



