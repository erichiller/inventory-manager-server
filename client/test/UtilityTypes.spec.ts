import { TRecursiveDataWrap, StringKeys } from '~lib/types/UtilityTypes';
// client\src\lib\types\UtilityTypes.ts
interface Test1I {
    foo: 'hello';
}

interface Test2I extends Test1I {
    propArray: [ 'hello' ];
}
interface Test3I extends Test2I {
    propArray: [ 'hello' ];
    propObject: {
        propSubObject1_1: string;
    };
}
interface Test4I extends Test3I {
    propArray: [ 'hello' ];
    propObject: {
        propSubObject1_1: string;
    };
    propArrayOfObjects: [
        { 
            propObj1_Prop1: number;
        }
    ];
}
interface Test5I extends Test4I {
    propArray: [ 'hello' ];
    propObject: {
        propSubObject1_1: string;
    };
    propArrayOfObjects: [
        { 
            propObj1_Prop1: number;
            propObjLevel2_Prop1: number;
            propObjLevel2_propArrayOfObjects_Prop2: [
                {
                    propObjLevel3_Prop1: number;
                }
            ];
        }
    ];
}

let foo1: TRecursiveDataWrap<Test1I> = {
    foo: 'hello'
};

let foo2: TRecursiveDataWrap<Test2I> = {
    foo: 'hello',
    propArray: {
        data: [ 'hello' ]
    }
};

let foo3: TRecursiveDataWrap<Test3I> = {
    foo: 'hello',
    propArray: {
        data: [ 'hello' ]
    },
    propObject: {
        data: {
            propSubObject1_1: 'hello'
        }
    }
};

let foo4: TRecursiveDataWrap<Test4I> = {
    foo: 'hello',
    propArray: {
        data: [ 'hello' ]
    },
    propObject: {
        data: {
            propSubObject1_1: 'hello'
        }
    },
    propArrayOfObjects: {
        data: [
            { 
                propObj1_Prop1: 3
            }
        ]
    }
};

let foo5: TRecursiveDataWrap<Test5I> = {
    foo: 'hello',
    propArray: {
        data: [ 'hello' ]
    },
    propObject: {
        data: {
            propSubObject1_1: 'hello'
        }
    },
    propArrayOfObjects: {
        data: [
            { 
                propObj1_Prop1: 4,
                propObjLevel2_Prop1: 3,
                propObjLevel2_propArrayOfObjects_Prop2: {
                    data: [
                        {
                            propObjLevel3_Prop1: 3
                        }
                    ]
                }
            }
        ]
    }
};

let numberAsTRecursiveDataWrap: TRecursiveDataWrap<number> = 3;
let stringAsTRecursiveDataWrap: TRecursiveDataWrap<string> = "hello";


interface StringKeysTestInterface {
    "prop1": string;
    2: number;
    prop3: number;
}
let stringKeys1: StringKeys<StringKeysTestInterface> = 'prop1';
// let stringKeys2: StringKeys<StringKeysTestInterface> = 'prop2'; // this should not work (should error)
let stringKeys3: StringKeys<StringKeysTestInterface> = 'prop3';


test( 'if the file compiled, the type checking tests are good', () => true);