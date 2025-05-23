
export interface Product {
    id: number;
    description: string;
    salePrice: number;
    category: string;
    image: string;
}

export interface ProductSale {
    saleId: number;
    productId:number;
    saleQty: number;
    salePrice: number;
    saleDate: Date;
}