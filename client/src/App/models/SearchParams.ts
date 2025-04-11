export default interface SearchParams {
    OrderBy: string;
    SearchTerm?: string;
    Category?:  string;
    Color?: string;
    Material?: string;
    Raing?: string;
    CurrentPageNumber: number;
    ItemsOnPage: number;
}