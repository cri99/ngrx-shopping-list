import { createSelector } from "@ngrx/store";
import { AppState, Product, ProductFilters } from "../shared/types";

const applyProductsFilters = (products: Product[], filters: ProductFilters): Product[] => {
    return products.filter(product => {
      return  (!filters.name || product.name.toLowerCase().includes(filters.name.toLowerCase())) && 
              (!filters.category || filters.category.id === product.category?.id)
      }
    );
}


export const selectShoppingListProducts = createSelector(
    (appState: AppState) => appState.products ?? [],
    (allProducts: Product[]) => allProducts.filter(p => p.inList)
);

export const selectNotInShoppingListProducts = createSelector(
    (appState: AppState) => appState.products ?? [],
    (products) => products.filter(p => !p.inList)
);


const selectFilters = (appState: AppState) => appState.filters;

export const selectAvailableProducts = createSelector(
    selectNotInShoppingListProducts,
    selectFilters,
    applyProductsFilters
);



