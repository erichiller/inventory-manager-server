import { JsonEditorForm } from "./GenericObjectEditor";
import React from "react";
import { CodeEditor } from "./CodeEditor";
import { GenericObjectJsonEditor } from "./JsonEditor";



export const ObjectTable: React.FC<{}> = () => {
    return <>
        < JsonEditorForm />
        < CodeEditor />
        < GenericObjectJsonEditor text="[ 'foo' ]" />
    </>;
};