import {Injectable} from '@angular/core';
import {Ingredient} from "../models/models";



@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('a', 1),
    new Ingredient('b', 2),
    new Ingredient('c', 3),
  ];

  constructor() {
  }

  addIngredient(ingredient: Ingredient | Ingredient[]) {
    if (ingredient instanceof Ingredient)
      this.ingredients.push(ingredient);
    else
      this.ingredients.push(...ingredient);
    console.log('ingredients ', this.ingredients)
  }

  getIngredient() {
    return this.ingredients.slice();
  }

  removeIngredient(ingredient: Ingredient) {
    this.ingredients.remove(ingredient);
  }

}
