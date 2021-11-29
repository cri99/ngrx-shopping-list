import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category,  } from './types';
import { DEFAULT_CATEGORIES } from './utils';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly _allCategories$ = new BehaviorSubject<Category[]>(DEFAULT_CATEGORIES);
  
  constructor() { }

  addNewCategory(newCategory: Category) {
    const currentCategories = this._allCategories$.value;
    currentCategories.push(newCategory);
    this._allCategories$.next(currentCategories);
  }

  updateCategory(updatedCategory: Category) {
    const currentCategories = this._allCategories$.value;
    const idxOfProductToUpdate = currentCategories.findIndex(category => category.id === updatedCategory.id);
    currentCategories[idxOfProductToUpdate] = updatedCategory;
    this._allCategories$.next(currentCategories);
  }

  deleteCategory(categoryToDeleteId: number) {
    const currentCategories = this._allCategories$.value;
    const idxOfCategoryToDelete = currentCategories.findIndex(category => category.id === categoryToDeleteId);
    currentCategories.slice(idxOfCategoryToDelete, 1);
    this._allCategories$.next(currentCategories);
  }

  getAllCategories$(): Observable<Category[]> {
    return this._allCategories$.asObservable();
  }

}
