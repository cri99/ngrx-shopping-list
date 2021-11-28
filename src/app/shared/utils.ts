import { Product } from "./types";


export class Utils {
    static generateRandomID(): number {
        return Math.floor(Math.random() * 100000000); 
    }
}

export const DEFAULT_PRODUCTS: Product[] = [
    {
        name: "Pomodori",
        id: 1,
        inList: false
    },
    {
        name: "Spaghetti",
        id: 2,
        inList: false
    },
    {
        name: "Basilico",
        id: 3,
        inList: false
    },
]