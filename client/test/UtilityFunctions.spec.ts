import { mocked } from 'ts-jest/utils';
import { enumerable, flatArrayObjectProperty } from "~lib/UtilityFunctions";

/**
 * https://jestjs.io/docs/en/expect
 * https://jestjs.io/docs/en/configuration
 * https://jestjs.io/docs/en/webpack
 */


global.fetch = jest.fn( () =>
    Promise.resolve( {
        json: () => Promise.resolve( { } ),
    } ) as any
);


beforeEach( () => {
    mocked( fetch ).mockClear();
} );





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
test( 'check that flatArrayObjectProperty output is correct', () => {
    let result = flatArrayObjectProperty( arr, 'propA' );
    expect( Array.isArray( result ) ).toBe( true );
    expect( typeof result[0] ).toBe( "number" );
    expect( result ).toStrictEqual( [ 1, 2, 3, 4, 5, 6 ] );
} );


class TestClass {

    // if there are additional problems with `@enumerable` see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function
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
} );



