import { createAction, props } from "@ngrx/store";
import { Category, Product, ProductFilters } from "../shared/types";

export const ACTIONS = {
    ADD_NEW_CATEGORY: '[MAIN] New category created',

    ADD_NEW_PRODUCT: '[MAIN] New product added',
    DELETE_PRODUCT: '[MAIN] Product deleted',
    PRODUCT_PURCHASED: '[MAIN] Product purchased',
    UPDATE_PRODUCT: '[MAIN] Product Updated',

    UPDATE_PRODUCT_FILTERS: '[MAIN] Filters Updated'
}

export const addNewCategory = createAction(ACTIONS.ADD_NEW_CATEGORY, props<Category>());

export const addNewProduct = createAction(ACTIONS.ADD_NEW_PRODUCT, props<Product>());
export const deleteProduct = createAction(ACTIONS.DELETE_PRODUCT, props<{ productToDeleteId: number }>());
export const updateProduct = createAction(ACTIONS.UPDATE_PRODUCT, props<Product>());
export const purchaseProduct = createAction(ACTIONS.PRODUCT_PURCHASED, props<Product>());

export const updateProductFilters = createAction(ACTIONS.UPDATE_PRODUCT_FILTERS, props<ProductFilters>());
