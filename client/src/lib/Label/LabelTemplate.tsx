import { Label as LabelGql, LabelTemplateFieldsFragment } from "../types/graphql";
import { LabelExport, LabelExportConstituents } from "./LabelExport";


export interface Label extends Omit<LabelGql, 'parent_of' | 'parent_of_aggregate' | 'item' | 'content' | 'template_items' | 'template_items_aggregate'> {
    content: LabelExportConstituents;
}

export interface ILabelTemplate extends Pick<LabelTemplateFieldsFragment, "sequence" | "criteria"> {
    label: Label;
    // label: ( {
    //     __typename?: 'label';
    // } & Pick<Label, 'width' | 'content' | 'created_at' | 'edit_of_id' | 'height' | 'id' | 'item_id' | 'updated_at' | 'title'> )
};

export class LabelTemplate implements ILabelTemplate {

    sequence: number;

    criteria?: any;

    label: LabelExport;

    constructor ( params: ILabelTemplate ) {
        Object.assign( this, params
            // , { label: new LabelExport( params.label ) } 
            );
        // this.sequence = params.sequence;
        // this.criteria = params.criteria;
        this.label = params.label instanceof LabelExport ? params.label : new LabelExport( params.label );
    }

}