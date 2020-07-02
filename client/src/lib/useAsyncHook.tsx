import React from "react";

export function useAsyncHook<T>(f: () => Promise<T> ): [ T, boolean ] {
    const [ result, setResult ] = React.useState<T>( null );
    const [ loading, setLoading ] = React.useState<boolean>( false );

    React.useEffect( () => {
        async function fetchBookList () {
            try {
                setLoading( true );
                const result = await f();

                // console.log(json);
                setResult(
                    result
                );
            } catch ( error ) {
                setLoading( null );
            }
        }

        if (f) {
            fetchBookList();
        }
    }, [ f ] );

    return [ result, loading ];
}
