

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
            if ( is_template ) {
                part = obj[ part ];
                is_template = false;
                wasModified = true;
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