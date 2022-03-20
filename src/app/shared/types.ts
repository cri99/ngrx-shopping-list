import { Utils } from "./utils";

export interface AppState {
    products: Product[],
    categories: Category[],
    filters: ProductFilters
}


export class Product {
    id: number;
    name: string;
    category?: Category;
    inList: boolean;

    constructor(name: string = "", category?: Category) {
        this.id = Utils.generateRandomID();
        this.name = name;
        this.category = category;
        this.inList = false;
    }
}

export class Category {
    id: number;
    name: string;
    color: string;

    constructor(name: string = "", color: string = "#FFF") {
        this.id = Utils.generateRandomID();
        this.name = name;
        this.color = color;
    }
}


export class ProductFilters implements Partial<Omit<Product, 'id' | 'inList'>> {
    category?: Category;
    name?: string;
    constructor(name: string = "",  category?: Category) {
        this.name = name;
        this.category = category;
    }
}