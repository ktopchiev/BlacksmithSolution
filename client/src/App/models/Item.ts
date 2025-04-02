export interface Item {
    itemId: string;
    name: string;
    description?: string;
    price: number;
    imageUrl: string;
    material: string;
    color: string;
    category: string;
    rating: number;
    quantityInStock: number;
}