export interface itemObject {
    id: number;
    name: string;
    unitPrice: number;
    imageUrl: string;
    ingredients: string[];
    soldOut: boolean
}

export interface cartObject {
    id: number;
    name: string;
    unitPrice: number;
    imageUrl: string;
    quantity: number;
    totalPrice: number;
}

export interface cartType {
    items: cartObject[];
    subTotal: number;
    totalQuantity: number;
    open: boolean
}

export interface itemProps {
    item: itemObject
}

export interface modalProps {
    items: {
        id: number;
        name: string;
        unitPrice: number;
        imageUrl: string;
        quantity: number;
        totalPrice: number;
    }
}

export interface modalPropsArray {
    items: cartObject[];
    subTotal: number
}