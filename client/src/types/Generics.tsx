import { Item } from "./graphql";


export type GenericItem = Omit<Item, '__typename'>;