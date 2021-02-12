

/**
 * Take input string and make replacements for `{{prop}}` from key; values in `obj`
 * @param str input string in which `{{prop}}`s are found
 * @param obj object from which to draw replacement for `{{prop}}` -> `obj[prop]`
 * @returns { renderedString: string, wasModified: boolean } where `renderedString` is the new string with replacements applied and `wasModified` is set to true if any template strings were found
 */
export function stringTemplateRender ( str: string, obj: object ): { renderedString: string; wasModified: boolean; } {
    let parts = str.split( /({{([0-9a-zA-Z_]*)}})/g );
    str = "";
    let is_template: boolean = false;
    let wasModified: boolean = false;
    parts.forEach( ( part, key ) => {
        if ( part.substr( 0, 2 ) === "{{" ) {
            is_template = true;
        } else {
            if ( is_template && part.length > 0 ) {
                let all_caps: boolean = false;
                let first_cap: boolean = false;

                if ( part === part.toUpperCase() ) {
                    all_caps = true;
                } else if ( part[ 0 ] === part[ 0 ].toUpperCase() ) {
                    first_cap = true;
                }
                if ( obj[ part ] == null ) {
                    part = "";
                } else {
                    is_template = false;
                    wasModified = true;
                    part = obj[ part ];
                    if ( all_caps ) {
                        part = part.toUpperCase();
                    } else if ( first_cap ) {
                        part = part.charAt( 0 ).toUpperCase() + part.slice( 1 );
                    }
                }
            }
            // console.log( {cls: 'stringTemplateRender', key, part });
            str += part;
        }
    } );
    // console.log( { cls: 'stringTemplateRender', str } );
    return {
        renderedString: str,
        wasModified
    };
}
