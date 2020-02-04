
import { Item as ItemGql, Icon, Label, ItemHardwareFastenerBolt as ItemHardwareFastenerBoltGql, ItemBundle } from "../types/graphql";

import { Integer } from '../types/uint8';

export type GenericItem = Pick<ItemGql, 'id'>;

export abstract class Item<T extends GenericItem> {
    __typename: string;
    id: Integer;

    name?: string;
    description?: string;
    item: ItemGql;

    get class (): string {
        return this.__typename;
    }

    /**
     * common lookup of icon;
     * returns dataurl ( SVG )
     */
    get icon (): React.ReactElement {
        // return <img />;
        return null;
    }
    get iconMatches (): Icon[] {
        return null;
    }
    get icons (): React.ReactElement[] {
        return null;
    }
    get labelTemplate (): Label {
        return null;
    }
    get labelTemplateMatches (): Label[] {
        return null;
    }
    get labelTemplates (): Label[] {
        return null;
    }
    /**
     * Props which should be included in label (default) 
     * Optionally defined on subclasses
     */
    get labelProps (): ( keyof T )[] {
        return null;
    }
    /**
     * Props to use as display columns (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get columnProps (): ( keyof T )[] {
        return null;
    }
    /**
     * Props which should be included in search (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get searchProps (): ( keyof T )[] {
        return null;
    }
    /**
     * Props which should be filterable in table (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get filterProps (): ( keyof T )[] {
        return null;
    }
    /**
     * Props which should be sortable in table (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get sortProps (): ( keyof T )[] {
        return null;
    }
    /**
     * Props to default to in QR Code (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get defaultQrProps (): ( keyof T )[] {
        return null;
    }

    get tableRowComponent (): React.ReactElement {
        return null;
    }
    /**
     * Modal
     */
    get editComponent (): React.ReactElement {
        return null;
    }
    /**
     * Single, detailed view
     */
    get detailComponent (): React.ReactElement {
        return null;
    }

    // get bundle (): Item {
    //     return null;
    // }
    
}