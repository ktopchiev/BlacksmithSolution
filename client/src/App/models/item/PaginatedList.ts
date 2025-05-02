import { Item } from "./Item";

export interface PaginatedList {
    itemsCount: number;
    itemsOnPage: number;
    totalPages: number;
    currentPageNumber: number;
    items: Item[];
}