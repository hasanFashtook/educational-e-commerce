export type Product = {
    id: string;
    name: string;
    isAvailableForPurchase: boolean;
    priceInCents: number;
    _count: {
        orders: number;
    }
}

export type User = {
    id: string;
    email: string;
    orders: {
        pricePaidInCents: number;
    }[];
    _count: {
        orders: number;
    };
}

export type Order = {
    product: {
        name: string;
    };
    user: {
        email: string;
    };
    id: string;
    pricePaidInCents: number;
}