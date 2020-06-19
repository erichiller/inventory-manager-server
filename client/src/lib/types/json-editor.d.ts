
declare module '@json-editor/json-editor' {

    interface IConfig {
        /**
         * If true, JSON Editor will load external URLs in $ref via ajax.	
         * @default false
         */
        ajax?: boolean;

        /**
         * Allows schema references to work either with or without cors; set to `protocol://host:port` when api is served by different host. 
        **/
        ajaxBase?: string;

        /**
         * If true, JSON Editor will make ajax call with [credentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials). 
         * @default FALSE 
        **/
        ajaxCredentials?: boolean;

        /**
         * If true, the label will not be displayed/added. 
         * @default FALSE 
        **/
        compact?: boolean;

        /**
         * If true, remove all "add row" buttons from arrays. 
         * @default FALSE 
        **/
        disable_array_add?: boolean;

        /**
         * If true, remove all "delete row" buttons from arrays. 
         * @default FALSE 
        **/
        disable_array_delete?: boolean;

        /**
         * If true, remove all "delete all rows" buttons from arrays. 
         * @default FALSE 
        **/
        disable_array_delete_all_rows?: boolean;

        /**
         * If true, remove all "delete last row" buttons from arrays. 
         * @default FALSE 
        **/
        disable_array_delete_last_row?: boolean;

        /**
         * If true, remove all "move up" and "move down" buttons from arrays. 
         * @default FALSE 
        **/
        disable_array_reorder?: boolean;

        /**
         * If true, add copy buttons to arrays. 
         * @default FALSE 
        **/
        enable_array_copy?: boolean;

        /**
         * If true, remove all collapse buttons from objects and arrays. 
         * @default FALSE 
        **/
        disable_collapse?: boolean;

        /**
         * If true, remove all Edit JSON buttons from objects. 
         * @default FALSE 
        **/
        disable_edit_json?: boolean;

        /**
         * If true, remove all Edit Properties buttons from objects. 
         * @default FALSE 
        **/
        disable_properties?: boolean;

        /**
         * If true, array controls (add, delete etc) will be displayed at top of list. 
         * @default FALSE 
        **/
        array_controls_top?: boolean;

        /**
         * The first part of the `name` attribute of form inputs in the editor. An full example name is `root[person][name]` where "root" is the form_name_root. 
         * @default "root" 
        **/
        form_name_root?: string;
                
        /**
                 * The icon library to use for the editor. See the CSS Integration section.
                 * @default null
                 */
                iconlib?: IconLib;

        /**
         * Display only icons in buttons. This works only if iconlib is set. 
         * @default FALSE 
        **/
        remove_button_labels?: boolean;

        /**
         * If true, objects can only contain properties defined with the properties keyword. 
         * @default FALSE 
        **/
        no_additional_properties?: boolean;

        /**
         * An object containing schema definitions for URLs. Allows you to pre-define external schemas. 
         * @default {} 
        **/
        refs?: object;

        /**
         * If true, all schemas that don't explicitly set the required property will be required. 
         * @default FALSE 
        **/
        required_by_default?: boolean;

        /**
         * If true, makes oneOf copy properties over when switching. 
         * @default TRUE 
        **/
        keep_oneof_values?: boolean;

        /**
         * A valid JSON Schema to use for the editor. Version 3 and Version 4 of the draft specification are supported. 
         * @default {} 
        **/
        schema?: JSONSchema;

        /**
         * When to show validation errors in the UI. Valid values are interaction, change, always, and never. 
         * @default "interaction" 
        **/
        show_errors?: "interaction" |" change" |" always" |" never"

        /**
         * Seed the editor with an initial value. This should be valid against the editor's schema. 
         * @default null 
        **/
        startval?: object;

        /**
         * The JS template engine to use. See the Templates and Variables section.
         * @default default
         */
        template?: Template;

        /**
         * The CSS theme to use. See the CSS Integration section.
         * @default "html"
         */
                theme?: Theme;

        /**
         * If true, only required properties will be included by default. 
         * @default FALSE 
        **/
        display_required_only?: boolean;

        /**
         * If true, NON required properties will have an extra toggable checkbox near the title that determines if the value must be included or not in the editor´s value 
         * @default FALSE 
        **/
        show_opt_in?: boolean;

        /**
         * If true, displays a dialog box with a confirmation message before node deletion. 
         * @default TRUE 
        **/
        prompt_before_delete?: boolean;

        /**
         * The default value of `format` for objects. If set to table for example, objects will use table layout if `format` is not specified. 
         * @default normal 
        **/
        object_layout?: JSONSchemaPropertyFormat;

        /**
         * Preserve value at Move Up or Down.(No value is selected automatically upon deletion.) 
         * @default TRUE 
        **/
        enum_source_value_auto_select?: boolean;

        /**
         * Max depth of the nested properties to be rendered of provided json schema. The missing of this option could cause "maximum call stack size exceeded" in case of object properties with circular references. 0 value means "render all". 
         * @default 0 
        **/
        max_depth?: Integer;
            
        /**
             * If true default values based on the "type" of the property will be used 
            * @default TRUE 
            **/
        use_default_values?: boolean;

    }

    type IconLib =  'jqueryui' |
                    'fontawesome3' |
                    'fontawesome4' |
                    'fontawesome5' |
                    'spectre';

    namespace CSS {
        type Width = string;
    }

    type Integer = number;

    interface FormElement {
        item: {
            text: string;
        }
    }

    interface CallbacksConfig {
        template: { [key: string]: (jseditor: JSONEditor, jsonEditor: FormElement) => string; } // TODO: FormElement === JSONEditor?
    }

    /**
     * Default is `html`
     * {@see DeprecatedTheme}
     */
    type Theme =    'barebones' |
                    'html' |
                    'bootstrap4' |
                    'spectre' |
                    'tailwind';

    /**
     * DO NOT USE
     */
    type DeprecatedTheme =  'bootstrap2' |
                            'bootstrap3' |
                            'foundation3' |
                            'foundation4' |
                            'foundation5' |
                            'foundation6' |
                            'jqueryui' |
                            'materialize';

    type Template = 
        "ejs" |
        "handlebars" |
        "hogan" |
        "markup" |
        "mustache" |
        "swig" |
        "underscore" |
        {
            compile: ( vars: string ) => string;
        };
    

    interface IEditorConfig {
        /**
         * If set to true, the editor will start collapsed( works for objects and arrays )
         */
        collapsed: boolean;
        /**
         * If set to true, the "add row" button will be hidden( works for arrays)
         */
        disable_array_add: boolean;
        /**
         * If set to true, all of the "delete" buttons will be hidden( works for arrays)
         */
        disable_array_delete: boolean;
        /**
         * If set to true, just the "delete all rows" button will be hidden( works for arrays)
         */
        disable_array_delete_all_rows: boolean;
        /**
         * If set to true, just the "delete last row" buttons will be hidden( works for arrays)
         */
        disable_array_delete_last_row: boolean;
        /**
         * If set to true, the "move up/down" buttons will be hidden( works for arrays)
         */
        disable_array_reorder: boolean;
        /**
         * If set to true, the collapse button will be hidden( works for objects and arrays )
         */
        disable_collapse: boolean;
        /**
         * If set to true, the Edit JSON button will be hidden( works for objects)
         */
        disable_edit_json: boolean;
        /**
         * If set to true, the Edit Properties button will be hidden( works for objects)
         */
        disable_properties: boolean;
        /**
         * If set to true, array controls( add, delete etc ) will be displayed at top of list( works for arrays)
         */
        array_controls_top: boolean;
        /**
         * An array of display values to use for select box options in the same order as defined with the enum keyword.Works with schema using enum values.
         */
        enum_titles: string[];
        /**
         * If set to true, the input will auto expand / contract to fit the content.Works best with textareas.
         */
        expand_height: boolean;
        /**
         * Explicitly set the number of grid columns( 1 - 12 ) for the editor if it's within an object using a grid layout.;
         */
        grid_columns: Integer;
        /**
         * If set to true, the editor will not appear in the UI( works for all types)
         */
        hidden: boolean;
        /**
         * Explicitly set the height of the input element.Should be a valid CSS width string( e.g. "100px" ).Works best with textareas.
         */
        input_height: CSS.Width;
        /**
         * Explicitly set the width of the input element.Should be a valid CSS width string( e.g. "100px" ).Works for string, number, and integer data types.
         */
        input_width: CSS.Width;
        /**
         * If set to true for an object, empty object properties( i.e.those with falsy values) will not be returned by getValue().
         */
        remove_empty_properties: boolean;
    }

    type LanguageKey = 'en' | string;

    /**
     * like `"#/definitions/name"`
     */
    type JSONSchemaRef = string;

    interface JSONSchemaProperty { // TODO
        title?: string;
        $ref?: JSONSchemaRef;
        format?: JSONSchemaPropertyFormat;
    }

    /**
     * HTML5 input types
     */
    type JSONSchemaPropertyFormat = 'color' |
                                    'date' | 
                                    'datetime' | 
                                    'datetime-local' | 
                                    'email' | 
                                    'month' | 
                                    'password' | 
                                    'number' | 
                                    'range' | 
                                    'tel' | 
                                    'text' | 
                                    'textarea' | 
                                    'time' | 
                                    'url' | 
                                    'week' ;

    interface JSONSchemaObject {
        type?: object | 'object';
    }
    interface JSONSchemaEnum {
        enum: string[];
        type: string | "string";
    }
    interface JSONSchemaString {
        pattern?: string;
        type: string | "string";
    }
    interface JSONSchemaReference {
        $ref: string;
    }
    interface JSONSchema { // TODO
        properties?: { [key: string]: JSONSchemaProperty ; };
        definitions: { [key: string]: JSONSchemaObject | JSONSchemaEnum | JSONSchemaString | JSONSchemaReference ; };
    }

    type JSONPath = string;

    interface ValidationError {
        path: JSONPath;
        property: keyof JSONSchema;
        message: string;
    }

    type CustomValidator = (schema: JSONSchema, value: string | number, path) => ValidationError[];

    interface IDefaults {
        options: IConfig;
        editors: IEditorConfig;
        callbacks: CallbacksConfig;
        language: LanguageKey;
        /** Key should be one of `LanguageKey` */
        languages: { [key: string]: {
            error_minLength: string;
            error_notset: string;
        };};
        resolvers: {
            unshift: (schema: JSONSchema) => string;
        };
        custom_validators: CustomValidator[];
    }

    class JSONEditorNode extends JSONEditor {}

    /**
     * eg.
     * 'root.location'
     */
    type PathT = string;

    class JSONEditor {

        constructor ( element: HTMLElement, config: IConfig );

        static defaults: IDefaults;

        /**
         * Disable entire form
         **/
        disable (): void;

        /**
         * Disable part of the form
         * @param formPath for example `'root.location'`
         */
        getEditor ( formPath: PathT ): JSONEditorNode | null;

        /**
         * Enable entire form
         */
        enable (): void;

        /**
         * Check if form is currently enabled
         */
        isEnabled (): boolean;

        /**
         * Activate part of the form
         */
        activate (): void;

        /**
         * Deactivate part of the form
         */
        deactivate (): void;


        /**
         * This removes the editor HTML from the DOM and frees up resources.
         */
        destroy (): void;

        /**
         * When an array item is added, removed, moved up, moved or removed the json editor will trigger a relative event.
         * @param event action within form
         * @param callback execute when given action occurs
         */
        on ( event: EditorEvent, callback: (editor: JSONEditor) => void ): void;
        /**
         * 
         * @param event action within form
         * @param callback reference to callback function given in `on`
         */
        off ( event: EditorEvent, callback: FunctionReference ): void;

        watch ( fieldPath: PathT, callback: (path: PathT) => void ): void;
        unwatch ( fieldPath: PathT, callback: FunctionReference ): void;

        /**
         * Validate an arbitrary value against the editor's schema
         * @param value arbitrary string else use the current EditorValue
         */
        validate( value?: string): ValidationError[];

        /**
         * 
         * @param valueObject path: value object
         */
        setValue(valueObject?: {[key: string]: JSONValueT;}): void;
        /**
         * `getEditor` will return null if the path is invalid
         * @param path optional path to return value of; otherwise returns all form values
         */
        getValue(): {[key: string]: JSONValueT;};
    }

    type JSONValueT = string | number;

    type FunctionReference = Function;


    type EditorEvent = EditorArrayEvent & EditorChangeEvent;

    /**
     * The change event is fired whenever the editor's value changes.
     */
    type EditorChangeEvent = 'change';

    type EditorArrayEvent = 'moveRow' | 'addRow' | 'deleteRow' | 'deleteAllRows';
}