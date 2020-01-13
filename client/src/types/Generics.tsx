import { Item } from "./graphql";


// export type GenericItem = Omit<Item, '__typename'>;

import { Integer } from "../types/uint8";

export interface GenericItem {
    // __typename: string;
    id: Integer;
    name?: string;
    description?: string;
}