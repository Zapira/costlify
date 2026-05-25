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
    id: string;
    costs: ProductItemType[];
}

interface CountHppProps {
    detailProduct: ProductType | null;
}