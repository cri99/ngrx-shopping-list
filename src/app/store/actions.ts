import { createAction, props } from "@ngrx/store";
import { Category, Product, ProductFilters } from "../shared/types";

export const ACTIONS = {
    ADD_NEW_CATEGORY: 'ADD_NEW_CATEGORY',

    ADD_NEW_PRODUCT: 'ADD_NEW_PRODUCT',
    DELETE_PRODUCT: 'DELETE_PRODUCT',
    PRODUCT_PURCHASED: 'PRODUCT_PURCHASED',
    UPDATE_PRODUCT: 'UPDATE_PRODUCT',

    UPDATE_PRODUCT_FILTERS: 'UPDATE_PRODUCT_FILTERS'

}

export const addNewCategory = createAction(ACTIONS.ADD_NEW_CATEGORY, props<Category>());

export const addNewProduct = createAction(ACTIONS.ADD_NEW_PRODUCT, props<Product>());
export const deleteProduct = createAction(ACTIONS.DELETE_PRODUCT, props<{ productToDeleteId: number }>());
export const updateProduct = createAction(ACTIONS.UPDATE_PRODUCT, props<Product>());
export const purchaseProduct = createAction(ACTIONS.PRODUCT_PURCHASED, props<Product>());

export const updateProductFilters = createAction(ACTIONS.UPDATE_PRODUCT_FILTERS, props<ProductFilters>());
