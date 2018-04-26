import {Injectable} from '@angular/core';
import {Ingredient} from "../models/ingredient";


@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  constructor() {
  }

  addIngredient(ingredient: Ingredient | Ingredient[]) {
    if (ingredient instanceof Ingredient)
      this.ingredients.push(ingredient);
    else
      this.ingredients.push(...ingredient);
    console.log('ingredients ',this.ingredients)
  }

  getIngredient() {
    return this.ingredients.slice();
  }

  removeIngredient(ingredient: Ingredient) {
    this.ingredients.removeItem(ingredient);
  }

}
