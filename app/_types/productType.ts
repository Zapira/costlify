export interface ProductItemType {
    name: string;
    type: string;
    satuan: string;
    qty: number;
    price: number;
    total?: number;
}

export interface ProductType {
    productName: string;
    qty: number;
    id: string;
    costs: ProductItemType[];
}