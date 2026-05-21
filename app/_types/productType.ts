export interface ProductType {
    productName: string;
    id: string;
    items: {
        name: string;
        type: string;
        satuan: string;
        qty: number;
        price: number;
    }[];
}