import {Injectable} from '@angular/core';
import {Ingredient} from "../models/ingredient";

declare global {
  interface Array<T> {
    remove(elem: T): T[];
  }
}

if (!Array.prototype.remove) {
  Array.prototype.remove = function (elem) {
    let index = this.indexOf(elem);
    return this.splice(index, 1);
  }
}


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
