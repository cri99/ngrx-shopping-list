import { TrackByFunction } from "@angular/core";
import { Category, Product, ProductFilters } from "./types";


export class Utils {
    static generateRandomID(): number {
        return Math.floor(Math.random() * 100000000); 
    }


    /**
     * Restituisce true se le proprietà dei due prodotti passati come parametro hanno gli stessi valori (non considera gli ID)
     * @param current 
     * @param previous 
     * @returns 
     */
    static compareProducts(current: Product, previous: Product): boolean {
        return current.name?.trim() === previous.name?.trim() && current.category?.id === previous.category?.id;
    }

    static getTrackProductByIDFn(): TrackByFunction<Product> {
        return (index, product) => product.id;
    }
}

export const DEFAULT_CATEGORIES: Category[] = [
    {
        name: "Frutta e verdura",
        color: "#c0ffbb",
        id: 1,
    },
    {
        name: "Pasta",
        color: "#ffd1ae",
        id: 2,
    }
]

export const DEFAULT_PRODUCTS: Product[] = [
    {
        name: "Pomodori",
        id: 1,
        inList: false,
        category: DEFAULT_CATEGORIES[0]
    },
    {
        name: "Spaghetti",
        id: 2,
        inList: false,
        category: DEFAULT_CATEGORIES[1]
    },
    {
        name: "Zucchine",
        id: 3,
        inList: false,
        category: DEFAULT_CATEGORIES[0]
    },
];

export const DEFAULT_FILTERS: ProductFilters = {
    name: ""
}


