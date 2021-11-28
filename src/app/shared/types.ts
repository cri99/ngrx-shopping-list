import { Utils } from "./utils";

export class Product {
    id: number;
    name: string;
    category?: Category | undefined;
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


export class ProductFilters implements Omit<Product, 'id' | 'inList'> {
    category: Category | undefined;
    name: string;
    constructor(name: string = "",  category?: Category) {
        this.name = name;
        this.category = category;
    }
}