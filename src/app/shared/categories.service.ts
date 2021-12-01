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

  getAllCategories$(): Observable<Category[]> {
    return this._allCategories$.asObservable();
  }

}
