export class Products{
     id: number;
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: number[];
    color: string[];
    price: number;
    discount_price?: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;
}