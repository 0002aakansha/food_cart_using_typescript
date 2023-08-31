export interface itemObject {
    id: number;
    name: string;
    unitPrice: number;
    imageUrl: string;
    ingredients: string[],
    soldOut: boolean
}

export interface cartObject {
    id: number;
    name: string;
    unitPrice: number;
    imageUrl: string;
    ingredients: string[],
    soldOut: boolean
    quantity: number;
    totalPrice: number;
}

export interface cartType {
    items: cartObject[];
    subTotal: number;
    totalQuantity: number;
    open: boolean
}
