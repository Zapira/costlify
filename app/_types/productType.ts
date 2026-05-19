export interface ProductType {
    productName: string;
    items: {
        name: string;
        type: string;
        satuan: string;
        qty: number;
        price: number;
    }[];
}