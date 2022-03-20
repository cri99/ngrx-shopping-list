import { createReducer, on } from "@ngrx/store";
import { DEFAULT_CATEGORIES, DEFAULT_FILTERS, DEFAULT_PRODUCTS } from "../shared/utils";
import { updateProduct, addNewCategory, addNewProduct, deleteProduct, updateProductFilters} from "./actions";

export const allProductsReducer = createReducer(
    DEFAULT_PRODUCTS,
    on(addNewProduct, (state, {type, ...product}) => {
        const products = [...state];
        products.push(product);
        return products;
    }),
    on(deleteProduct, (state, {type, productToDeleteId}) => {
        const products = [...state];
        const indexOfProductToDelete = products.findIndex(p => p.id === productToDeleteId);
        products.splice(indexOfProductToDelete, 1);
        return products;
    }),
    on(updateProduct, (state, {type, ...productToUpdate}) => {
        const products = [...state];
        const idx = products.findIndex(p => p.id === productToUpdate.id);
        products[idx] = productToUpdate;
        return products;
    })
);


export const allCategoriesReducer = createReducer(
    DEFAULT_CATEGORIES,
    on(addNewCategory, (state, {type, ...category}) => {
        const categories = [...state];
        categories.push(category);
        return categories;
    })
);



export const productFiltersReducer = createReducer(
    DEFAULT_FILTERS,
    on(updateProductFilters, (state, {type, ...updatedFilters}) => {
        return updatedFilters;
    })
)

